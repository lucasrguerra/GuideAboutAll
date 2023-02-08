'use strict';

import { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "",
      focus: "",
      number_of_topics: 10,
      data: null,
    };
  }

  render() {
    return (
      <div className="text-white w-11/12">
        <div>
          <label
            className="font-bold text-2xl tracking-wider"
            htmlFor="theme"
          >
            Sobre o que você deseja saber?
          </label><br />
          <input
            className="my-4 rounded-full py-2 px-4 w-8/12 text-black"
            type="text"
            id="theme"
            onChange={(event) => { this.setState({ theme: event.target.value }); }}
            onBlur={(event) => { this.setState({ theme: event.target.value }); }}
          />
          
          <br /><br />

          <label
            className="font-bold text-2xl tracking-wider"
            htmlFor="focus"
          >
            Quer focar em algo específico <br />
            sobre o assunto?
          </label><br />
          <input
            className="my-4 rounded-full py-2 px-4 w-6/12 text-black"
            type="text"
            id="focus"
            onChange={(event) => { this.setState({ focus: event.target.value }); }}
            onBlur={(event) => { this.setState({ focus: event.target.value }); }}
          />

          <br /><br />

          <label
            className="font-bold text-2xl tracking-wider"
            htmlFor="number_of_topics"
          >
            Quantos tópicos?
          </label><br />
          <input
            className="my-4 rounded-full py-2 px-4 w-4/12 text-black"
            type="number"
            id="number_of_topics"
            defaultValue={10}
            onChange={(event) => { this.setState({ number_of_topics: event.target.value }); }}
            onBlur={(event) => { this.setState({ number_of_topics: event.target.value }); }}
          />
          
          <br /><br /><br />

          <button
            className="bg-violet-900 font-bold py-3 px-8 rounded-full text-white text-xl tracking-wider"
            type="button"
            onClick={async (event) => {
              event.preventDefault();
              event.target.desabled = true;
              event.target.innerHTML = "Pesquisando...";

              if (this.state.theme === "") {
                alert("Por favor, preencha o campo 'Sobre o que você deseja saber?'");
              } else if (this.state.number_of_topics < 2) {
                alert("Por favor, preencha o campo 'Quantos tópicos?' com um número maior que 1");
              } else {
                await axios.get(`api/getData`, {
                  params: {
                    theme: this.state.theme,
                    focus: this.state.focus,
                    number_of_topics: this.state.number_of_topics,
                  }
                })
                  .then((response) => {
                    this.setState({ data: response.data.txt });
                    alert("Pesquisa concluída com sucesso!");
                  })
                  .catch((error) => {
                    alert("Ocorreu um erro ao pesquisar. Por favor, tente novamente.");
                    console.log(error);
                  });
              }

              event.target.desabled = false;
              event.target.innerHTML = "Pesquisar";
            }}
          >
            Pesquisar
          </button>

          <br /><br />

          <button
            className="bg-violet-900 font-bold py-3 px-8 rounded-full text-white text-xl tracking-wider"
            type="button"
            onClick={async(event) => {
              event.preventDefault();
              event.target.desabled = true;
              event.target.innerHTML = "Baixando...";

              if (this.state.data === null) {
                alert("Por favor, pesquise primeiro");
              } else {
                const blob_url = URL.createObjectURL(new Blob([this.state.data], { type: "text/plain" }));
                const link = document.createElement("a");
                link.href = blob_url;
                link.setAttribute("download", "data.txt");
                document.body.appendChild(link);
                link.click();
                link.remove();
              }

              event.target.desabled = false;
              event.target.innerHTML = "Baixar";
            }}
          >
            Baixar
          </button>

        </div>
      </div>
    );
  }
}