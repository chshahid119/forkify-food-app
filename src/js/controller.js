import * as model from './model.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////



const controlRecipes = async function () {
  try {
    // const id = window.location.hash.slice(1);
    const id ='5ed6604591c37cdc054bc886';
    console.log(id);

    if (!id) return;

    // 1) Loading Recipe
    recipeView.renderSpinner();
 
    await model.loadRecipe(id);

    // 2) Rendering Recipe
    recipeView.render(model.state.recipe);
  
  } catch (err) {
    alert(err);
  }
};

showRecipe();

// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
['hash', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));

// Algorithm to doing work like ceil and floor methods in JavaScript Manually
// let value = 51.3;
// let final_value = value.toString().split('.');
// let secondValue = final_value[1].split();
// if (secondValue == 5 || secondValue > 5) {
//   final_value[0] = +final_value[0] + 1;
//   value = final_value[0];
// } else {
//   final_value[0] = +final_value[0];
//   value = final_value[0];
// }
// console.log(value);
