'use strict';

export default function organizeDataInTxt(data) {
  let txt = `Tema: ${data.theme}\n`;
  txt += `Foco: ${data.focus}\n\n`;
  txt += `${data.resume}\n\n\n`;

  for (let i = 0; i < data.topics.length; i++) {
    txt += `Tópico ${i + 1}: ${data.topics[i].title}\n\n`;
    txt += `${data.topics[i].resume}\n\n`;
    txt += `Informações Adicionais:\n\n${data.topics[i].extra_info}\n\n`;
    txt += `Referências:\n${data.topics[i].references}\n\n\n`;
  };

  return txt;
};