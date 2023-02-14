'use strict';

import getResponse from "./getResponse.js";

export default async function initConversation(theme, focus, number_of_topics) {
  let first_message = `Escreva um resumo de até 500 palavras sobre ${theme}`;
  if (focus) { first_message += ` com foco em ${focus}`; };

  const response = await getResponse(first_message);
  const resume = response.response;

  let topic_message = `Liste os ${number_of_topics} principais tópicos sobre ${theme}`;
  if (focus) { topic_message += ` com foco em ${focus}`; }
  const response_of_topic_message = await getResponse(topic_message, response.conversationId, response.id);
  const topics = [];
  console.log([response_of_topic_message.response]);
  for (let index = 0; index < number_of_topics; index++) {
    const topic_init_index = response_of_topic_message.response.indexOf(`${index + 1}.`);
    let topic_string = response_of_topic_message.response.slice(topic_init_index);
    if (index === number_of_topics - 1) {
      topic_string = topic_string.slice(0);
    } else {
      topic_string = topic_string.slice(0, topic_string.indexOf('\n'));
    }
    topics.push(topic_string);
  }
  console.log(topics);

  return {
    resume: resume,
    topics: topics,
    conversationId: response.conversationId,
    parentMessageId: response_of_topic_message.id
  };
};