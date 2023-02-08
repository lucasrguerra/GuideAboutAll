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
  const topics = response_of_topic_message.response.split('\n');

  return {
    resume: resume,
    topics: topics,
    conversationId: response.conversationId,
    parentMessageId: response_of_topic_message.id
  };
};