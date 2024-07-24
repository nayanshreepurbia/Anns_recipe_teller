// document.querySelector('.button').addEventListener('click', function () {
//   // Fetch recommendations from the Flask API
//   fetch('http://127.0.0.1:5001/recommend/Chocolate')
//       .then(res => res.json())
//       .then(data => {
//           // Process the received data and update the HTML
//           displayRecommendations(data.recommendations);
//       })
//       .catch(error => console.log(error));
// });

// function displayRecommendations(recommendations) {
//   // Update your HTML with the recommended recipes
//   const resultDiv = document.getElementById("result");

//   // Check if there are recommendations
//   if (recommendations.length > 0) {
//       resultDiv.innerHTML = <p>You can make: ${recommendations.join(', ')}</p>;
//   } else {
//       resultDiv.innerHTML = <p>No recipes found for these ingredients.</p>;
//   }
// }

// //fetch('http://127.0.0.1:5001/recommend/Chocolate')
//   //.then(res => {
//     //return res.json();
//   //})
//   //.then(data => {
//     // Process the received data, maybe update your HTML with the recommended recipes
//   //})
//   //.catch(error => console.log(error));

// var survey_options = document.getElementById('gen_recipe');
//  var add_more_fields = document.getElementById('add_more_fields');
// var remove_fields = document.getElementById('remove_fields');

// add_more_fields.onclick = function(){
//   var newField = document.createElement('input');
//   newField.setAttribute('type','text');
//   newField.setAttribute('name','gen_recipe[]');
//   newField.setAttribute('class','gen_recipe');
//   newField.setAttribute('siz',50);
//   newField.setAttribute('placeholder','Another Ingredient');
//   survey_options.appendChild(newField);
// }


// // remove_fields.onclick = function(){
// //   var input_tags = survey_options.getElementsByTagName('input');
// //   if(input_tags.length > 2) {
// //     survey_options.removeChild(input_tags[(input_tags.length) - 1]);
// //   }
// //}


document.querySelector('.button').addEventListener('click', function () {
  // Fetch recommendations from the Flask API
  const ingredients = document.querySelectorAll('.gen_recipe');
  const ingredientList = Array.from(ingredients).map(input => input.value).join(',');

  fetch(`http://127.0.0.1:5001/recommend/${ingredientList}`)
    .then(res => res.json())
    .then(data => {
          // Process the received data and update the HTML
          displayRecommendations(data.recommendations);
      })
      .catch(error => console.log(error));
});

function displayRecommendations(recommendations) {
  // Update your HTML with the recommended recipes
  const resultDiv = document.getElementById("result");

  // Check if there are recommendations
  if (recommendations.length > 0) {
      resultDiv.innerHTML = `<p>You can make: ${recommendations.join(', ')}</p>`;
  } else {
      resultDiv.innerHTML = `<p>No recipes found for these ingredients.</p>`;
  }
}


// Rest of your existing JavaScript code...

// add_more_fields.onclick = function(){
//   var newField = document.createElement('input');
//   newField.setAttribute('type','text');
//   newField.setAttribute('name','gen_recipe[]');
//   newField.setAttribute('class','gen_recipe');
//   newField.setAttribute('siz',50);
//   newField.setAttribute('placeholder','Another Ingredient');
//   survey_options.appendChild(newField);
// }


// remove_fields.onclick = function(){
//   var input_tags = survey_options.getElementsByTagName('input');
//   if(input_tags.length > 2) {
//     survey_options.removeChild(input_tags[(input_tags.length) - 1]);
//   }
//}