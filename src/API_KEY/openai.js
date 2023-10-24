// // eslint-disable-next-line import/first

// const { OpenAI } = require('openai');

// const openai = new OpenAI({ apiKey:  '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', dangerouslyAllowBrowser: true });










// async function callApi() {
//     try {
//       const completion = await openai.completions.create({
//         model: "text-davinci-003",
//         prompt: "What is API",
//         max_tokens: 7,
//         temperature: 0,
//       });
  
//       console.log(completion.data.choices[0].text);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
  
//   callApi()
  



























// // const { OpenAI } = require('openai');

// // const openai = new OpenAI({ apiKey: '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', dangerouslyAllowBrowser: true });

// // async function main() {
// //   try {
// //     const response = await openai.completions.create({
// //         model: 'text-davinci-003',
// //       engine: 'text-davinci-003',
// //       prompt: 'Hello how are you',
// //       max_tokens: 50, // Adjust the number of tokens as needed.
// //       temperature: 0.7, // Adjust the temperature as needed.
// //     });

// //     console.log(response.choices[0].text);
// //   } catch (error) {
// //     console.error('Error:', error);
// //   }
// // }

// // main();
// // const {Configuration, OpenAIApi} = require('openai')
// // const configuration = new Configuration({
// //     apiKey: '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'
// // })
// // const openai = new OpenAIApi(configuration)
// // openai.listEngines().then((res) => {
// //     console.log(res)
// // })

// // export async function sendMsg(message){
// //     const res = await openai.createCompletion({
// //         model:'text-davinci-003',
// //         prompt:message,
// //         temperature:0.7,
// //         max_tokens:256,
// //         top_p:1,
// //         frequency_penalty:0,
// //         presence_penalty:0
// //     })
// //     return res.data.choices[0].text
// // }
// // openai.createCompletion({
// //     model:'text-davinci-003',
// //          prompt:"Say hello",
// //          temperature:0,
// //          max_tokens:7,
// // }).then((response) => {
// //     console.log(response.data)
// // })
