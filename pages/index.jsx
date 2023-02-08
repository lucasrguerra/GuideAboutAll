'use strict';

import Form from "/components/form";
import Head from "next/head";

export default function Index(props) {
  return (
    <center>
      <Head>
        <title>Guia sobre tudo</title>
      </Head>

      <div className="bg-violet-900 py-6 rounded-b-full w-10/12">
        <h1 className="font-bold font-serif text-4xl text-white tracking-wider">
          Guia sobre <br />
          tudo 🌎
        </h1>
      </div>

      <br /><br />

      <Form />
    </center>
  );
}