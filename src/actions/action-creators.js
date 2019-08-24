import { FETCH_RECIPES, FETCH_COUNT, FETCH_RECIPE, ADD_TO_CART, DELETE_FROM_CART, GET_RECIPES_IN_CART, SELECT_RECIPE } from './types';
import { RecipeService } from '../services/recipe.service';
import { CartService } from '../services/cart-service.service';

let recipeCount;
let growingThreshold = 5;
let recipeSvc = new RecipeService();

export function fetchRecipes(options,dispatch) {
    let recipes = recipeSvc.getRecipes();
    dispatch({
        type: FETCH_RECIPES,
        payload: recipes
    });
}

export function selectRecipe(selectedRecipe) {
    dispatch({
        type: SELECT_RECIPE,
        payload: selectedRecipe
    });
}


export function fetchRecipe(id) {
    let recipe = recipeSvc.getRecipe(id);
    dispatch({
        type: FETCH_RECIPE,
        payload: recipe
    });
}

export function addToCart(recipe) {
    CartService.addToCart(recipe);
    let recipes = CartService.getRecipesInCart();
    dispatch({
        type: ADD_TO_CART,
        payload: recipes
    });
}

export function removeFromCart(recipeID) {
    CartService.removeFromCart(recipeID);
    let recipes = CartService.getRecipesInCart();
    dispatch({
        type: DELETE_FROM_CART,
        payload: recipes
    });

}

export function getRecipesInCart() {
    let recipes = CartService.getRecipesInCart();
    dispatch({
        type: GET_RECIPES_IN_CART,
        payload: recipes
    });
}