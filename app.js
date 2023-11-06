const API_KEY = "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";

async function getCompletion(prompt) {
  const response = await fetch(`https://api.openai.com/v1/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      // prompt: "give a random example of programming language",
      prompt: prompt,
      max_tokens: 1000,
    }),
  });

  const data = await response.json();
  // console.log(data)
  return data;
}

// getCompletion()

const prompt = document.querySelector("#prompt");
const button = document.querySelector("#generate");
const output = document.querySelector("#output");

const prompt2 = document.querySelector("#prompt-quiz");
const button2 = document.querySelector("#generate-quiz");
const output2 = document.querySelector("#output-quiz");

button.addEventListener("click", async () => {
  console.log(prompt.value);

  if (!prompt.value) window.alert("Please enter a prompt");

  const response = await getCompletion(prompt.value);
  console.log(response);
  output.innerHTML = response.choices[0].text;
});

button2.addEventListener("click", async () => {
    console.log(prompt2.value);
  
    if (!prompt2.value) window.alert("Please enter a prompt");
  
    const response = await getCompletion(prompt2.value);
    console.log(response);
    output2.innerHTML = response.choices[0].text;
  });

  