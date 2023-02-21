const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
async function carrega() {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "oque é javaScript?",
    temperature: 0.9,
    max_tokens: 1000,
  });
  console.log(completion.data.choices[0].text);
}

carrega();
