import {async} from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './helpers';


export const state={
    recipe: {}
}

export const loadRecipe = async function(id){
    try{

        const data=await getJSON(`${API_URL}/${id}`)
        
        
          if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        
          const { recipe } = data.data;
        
          state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.sourcerl,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredeients: recipe.ingredients,
          };
        
          console.log(state.recipe);
    } 
    catch(err){
        alert(err);
    }
    
}   