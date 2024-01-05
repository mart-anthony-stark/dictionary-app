import axios from "axios";

export const getRandomWord = async () => {
  const options = {
    method: "GET",
    url: "/hello.json",
  };
  const response = await axios.request(options);
  console.log(response);
  return response.data;
};
export const getWordDefinition = async (word: string) => {
  const options = {
    method: "GET",
    url: `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
  };
  const response = await axios.request(options);
  console.log(response);
  return response.data;
};
