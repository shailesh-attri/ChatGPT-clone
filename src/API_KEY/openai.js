import OpenAI from "openai";

const API_KEY = '';

const openai = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function sendMsgToAi(userText) {
  try {
    const response = await openai.completions.create({
      model: "text-davinci-003",
      prompt: userText,
      temperature: 0.7,
      max_tokens: 4000,
    });

    console.log('Full API Response:', response);
    console.log('User Input', userText)

    if (response.choices && response.choices.length > 0) {
      const firstChoice = response.choices[0];
      if (firstChoice && firstChoice.text) {
        const finalResult = firstChoice.text.trim();
        return finalResult // Trim any leading or trailing spaces
      } else {
        console.error('Invalid response format. Missing text in choices:', response);
        throw new Error('Invalid response format');
      }
    } else {
      console.error('Invalid response format. Missing choices:', response);
      throw new Error('Invalid response format');
    }
  } catch (error) {
    console.error('Error sending message to OpenAI:', error);
    throw error; // Rethrow the error or handle it as needed
  }
}