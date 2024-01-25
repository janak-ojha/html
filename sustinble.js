const form = document.querySelector('#prediction-form');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const FL_A = parseFloat(document.querySelector('#FL_A').value);
  const FL_C = parseFloat(document.querySelector('#FL_C').value);
  const VS = parseFloat(document.querySelector('#VS').value);

  // Use the loaded model to make predictions on the user input
  const prediction = loaded_model.predict([[FL_A, FL_C, VS]]);

  const predicted_class_index = prediction[0];
  const class_labels = ['Emptying', 'Non Emptying']; 
  const predicted_class = class_labels[predicted_class_index];

  // Display the predicted class on the webpage
  resultDiv.textContent = `The predicted class is: ${predicted_class}`;
});
