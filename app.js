// Definir tu clave de API
const API_KEY = "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";

// Función para obtener completaciones de OpenAI
async function getCompletion(prompt) {
    // Hacer una solicitud a la API de OpenAI para obtener completaciones
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
      max_tokens: 1000, // Máximo de tokens en la respuesta
    }),
  });
  // Convertir la respuesta en formato JSON
  const data = await response.json();
  // console.log(data)
  return data; // Devuelve los datos obtenidos de la API
}

// getCompletion()

// Elementos del primer chat
const prompt = document.querySelector("#prompt");
const button = document.querySelector("#generate");
const output = document.querySelector("#output");

// Elementos del segundo el generador de quiz
const prompt2 = document.querySelector("#prompt-quiz");
const button2 = document.querySelector("#generate-quiz");
const output2 = document.querySelector("#output-quiz");

// Manejar el evento de hacer clic en el botón del primer chat
button.addEventListener("click", async () => {
  console.log(prompt.value);

  if (!prompt.value) window.alert("Please enter a prompt");

  const response = await getCompletion(prompt.value);
  console.log(response);
  output.innerHTML = response.choices[0].text;
});

// Manejar el evento de hacer clic en el botón del segundo (generación de quiz)
button2.addEventListener("click", async () => {
    console.log(prompt2.value);
  
    if (!prompt2.value) window.alert("Please enter a prompt");
  
    const response = await getCompletion(prompt2.value);
    console.log(response);
    output2.innerHTML = response.choices[0].text;
  });

// Datos para el gráfico
const datos = {
    labels: ['Junio', 'Julio', 'Agosto', 'Octubre', 'Noviembre'],
    datasets: [{
        label: 'Actividad en Studybuddy',
        data: [1, 2, 3, 5, 7],
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Color de las barras
        borderColor: 'rgba(75, 192, 192, 1)', // Color del borde
        borderWidth: 1 // Ancho del borde
    }]
};
  
// Opciones del gráfico
const opciones = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
};
  
// Crea el gráfico en el elemento canvas
const ctx = document.getElementById('miGrafico').getContext('2d');
const miGrafico = new Chart(ctx, {
    type: 'bar', // Tipo de gráfico (puede ser bar, line, pie, etc.)
    data: datos,
    options: opciones
});
  
  