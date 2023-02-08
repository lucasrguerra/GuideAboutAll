'use strict';

import getResponse from "/source/getResponse";

export default async function getDataAboutTopics(topics, conversationId, parentMessageId) {
  const data = [];
  let last_message_id = parentMessageId;

  for (let i = 0; i < topics.length; i++) {
    const response = await getResponse(`Escreva um resumo de até 500 palavras sobre ${topics[i]}`, conversationId, last_message_id);
    const resume = response.response;
    last_message_id = response.id;

    const references = await getResponse(`Liste as principais referências bibliográficas sobre ${topics[i]}`, conversationId, response.id);
    const references_list = references.response

    const extra_info = await getResponse(`Liste informações adicionais sobre o assunto ${topics[i]}`, conversationId, references.id);
    const extra_info_list = extra_info.response;

    data.push({
      title: topics[i],
      resume: resume,
      references: references_list,
      extra_info: extra_info_list,
    });
  };

  return {
    topics: data,
    parentMessageId: last_message_id,
  };
}