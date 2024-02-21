// ALL IMPORTS
// import icons from '../img/icons.svg'; // Parcel 1
import icons from 'url:../img/icons.svg'; // Parcel 2

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

const renderSpinner = function (parentEl) {
  const markup = ` 
  <div class="spinner">
  <svg>
    <use href="${icons}#icon-loader"></use>
  </svg>
</div>
  `;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
};

const showRecipe = async function () {
  try {
    // 1) Loading Recipe
    renderSpinner(recipeContainer);

    const res = await fetch(
      // 'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcc40'
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    );

    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    console.log(res, data);
    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(recipe);

    // 2) Rendering Recipe
    const markup = `
    <figure class="recipe__fig">
          <img src="${recipe.image}" alt="${
      recipe.title
    }" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${recipe.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${
              recipe.cookingTime
            }</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${
              recipe.servings
            }</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${icons}#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
           ${recipe.ingredients
             .map(ing => {
               return ` <li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="${icons}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${ing.quantity}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${ing.unit}</span>
              ${ing.description}
            </div>
          </li>`;
             })
             .join('')}

            
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${
              recipe.publisher
            }</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${recipe.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `;
    recipeContainer.innerHTML = '';
    recipeContainer.insertAdjacentHTML('afterbegin', markup);
  } catch (err) {
    alert(err);
  }
};
showRecipe();

// -----------------------------------------------------------
// Again Repeating from start
// // API LINK
// // https://forkify-api.herokuapp.com/v2

// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
// import { async } from 'regenerator-runtime';
// import * as model from './model.js';
// import recipeView from './views/recipeView.js';
// import searchView from './views/searchView.js';

// const recipeContainer = document.querySelector('.recipe');

// const controlRecipes = async function () {
//   try {
//     const id = window.location.hash.slice(1);

//     if (!id) return;

//     // 1) Loading Recipe
//     recipeView.renderSpinner();

//     await model.loadRecipe(id);

//     // 2) Rendering Recipe
//     recipeView.render(model.state.recipe);
//   } catch (err) {
//     // console.error();
//     recipeView.renderError();
//   }
// };

// const controlSearchResults = async function () {
//   try {
//     const query = searchView.getQuery();
//     if (!query) return;

//     await model.loadSearchResults('pizza');
//     console.log(model.state.search.results);
//   } catch (err) {
//     console.log(err);
//   }
// };

// controlSearchResults();

// const init = function () {
//   recipeView.addHandleRender(controlRecipes);
//   // searchView.addHandlerSearch(controlSearchResults);
// };

// init();

// // Algorithm to doing work like ceil and floor methods in JavaScript Manually
// // let value = 51.3;
// // let final_value = value.toString().split('.');
// // let secondValue = final_value[1].split();
// // if (secondValue == 5 || secondValue > 5) {
// //   final_value[0] = +final_value[0] + 1;
// //   value = final_value[0];
// // } else {
// //   final_value[0] = +final_value[0];
// //   value = final_value[0];
// // }
// // console.log(value);
