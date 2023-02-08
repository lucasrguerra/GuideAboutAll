'use strict';

import ChatGPTClient from '@waylaidwanderer/chatgpt-api';
import dotenv from "dotenv";
dotenv.config();

const clientOptions = {
  modelOptions: {
    model: 'text-davinci-003',
  },
};
const api = new ChatGPTClient(process.env.API_KEY, clientOptions);

export default  async function getResponse(message, conversationId, parentMessageId) {
  if (conversationId !== undefined && parentMessageId !== undefined) {
    return await api.sendMessage(message, { conversationId, parentMessageId });
  } else {
    return await api.sendMessage(message);
  };
};