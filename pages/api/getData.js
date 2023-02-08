'use strict';

import getDataAboutTopics from "/source/getDataAboutTopics";
import organizeDataInTxt from "/source/organizeDataInTxt";
import initConversation from "/source/initConversation";

export default async function getData(request, response) {
  if (request.method === 'GET') {
    const { theme, focus, number_of_topics } = request.query;

    const data = await initConversation(theme, focus, number_of_topics);
    const topics = await getDataAboutTopics(data.topics, data.conversationId, data.parentMessageId);
    data.topics = topics.topics;
    data.parentMessageId = topics.parentMessageId;
    data.theme = theme;
    data.focus = focus;


    response.status(200).json({ txt: organizeDataInTxt(data) });
  } else {
    response.status(405).json({ message: 'Method not allowed' })
  };
}
