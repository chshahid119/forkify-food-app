// import { async } from 'regenerator-runtime';
// import { API_URL } from './config';
// import { getJSON } from './helpers';

// export const state = {
//   recipe: {},
//   search: {
//     query: '',
//     results: [],
//   },
// };

// export const loadRecipe = async function (id) {
//   try {
//     const data = await getJSON(`${API_URL}${id}`);

//     if (!res.ok) throw new Error(`${data.message} (${res.status})`);

//     const { recipe } = data.data;

//     state.recipe = {
//       id: recipe.id,
//       title: recipe.title,
//       publisher: recipe.publisher,
//       sourceUrl: recipe.sourcerl,
//       image: recipe.image_url,
//       servings: recipe.servings,
//       cookingTime: recipe.cooking_time,
//       ingredeients: recipe.ingredients,
//     };

//     console.log(state.recipe);
//   } catch (err) {
//     throw err;
//   }
// };

// export const loadSearchResults = async function (query) {
//   try {
//     state.search.query = query;
//     const data = await getJSON(`${API_URL}?search=${query}`);
//     console.log(data);

//     state.search.results = data.data.recipes.map(rec => {
//       return {
//         id: rec.id,
//         title: rec.title,
//         publihser: rec.publisher,
//         image: rec.image_url,
//       };
//     });
//   } catch (err) {
//     console.error(`${err} 🔥 🔥`);
//     throw err;
//   }
// };
