import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const API_URL = process.env.REACT_APP_OPENAI_API_URL || 'https://api.openai.com/v1/chat/completions';
const MODEL = process.env.REACT_APP_OPENAI_MODEL || 'gpt-3.5-turbo';

export const sendMessageToChatGPT = async (messages) => {
  if (!API_KEY) {
    throw new Error('请在 .env 文件中配置 REACT_APP_OPENAI_API_KEY');
  }

  try {
    const response = await axios.post(
      API_URL,
      {
        model: MODEL,
        messages: messages.map(msg => ({
          role: msg.role,
          content: msg.content
        })),
        temperature: 0.7,
        max_tokens: 2000
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        }
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('ChatGPT API 错误:', error.response?.data || error.message);
    throw error;
  }
};