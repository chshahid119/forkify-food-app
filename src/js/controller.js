// API LINK 
// https://forkify-api.herokuapp.com/v2


import 'core-js/stable';
import 'regenerator-runtime/runtime';
import {async} from 'regenerator-runtime';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';


const recipeContainer = document.querySelector('.recipe');

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
  

    if (!id) return;

    // 1) Loading Recipe
    recipeView.renderSpinner();
 
    await model.loadRecipe(id);

    // 2) Rendering Recipe
    recipeView.render(model.state.recipe);
  
  } catch (err) {
    // console.error();
    recipeView.renderError();
  }
};


const controlSearchResults =async function(){
  try{
      const query = searchView.getQuery();
      if(!query) return;
    
     await model.loadSearchResults(query);
     console.log(model.state.search.results);
  }
  catch(err){
    console.log(err);
  }
}


const init=function(){
  recipeView.addHandleRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}

init();

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
