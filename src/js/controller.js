// ALL  IMPORTS
import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id);

    // Rendering the spinner
    recipeView.renderSpinner();

    //Guard Class
    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading Recipe
    await model.loadRecipe(id);

    // 2) Rendering Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    // 1) Get search Results
    const query = searchView.getQuery();
    //GUARD CLASS
    if (!query) return;

    // 2) Load Search Results
    await model.loadSearchResults(query);

    // 3) Render Results
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

controlSearchResults();

const init = function () {
  recipeView.addHanlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
