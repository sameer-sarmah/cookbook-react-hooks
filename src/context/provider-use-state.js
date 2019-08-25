import React, { useEffect ,useState} from 'react';
import {CartService} from "./../services/cart-service.service";
import {RecipeService} from "./../services/recipe.service";
import {Context} from './context';
import {shoppingReducer} from './../reducers/recipe-reducer';
import {cartReducer} from './../reducers/shopping-cart-reducer';

const initialShoppingState = {
    recipes: [],
    selectedRecipe: null
};
const initialCartState = {
    recipesInCart:[]
};
const  recipeService=new RecipeService();


export const Provider = (props)=> {



    const [shoppingState, setShoppingState ] = useState(initialShoppingState);
    const [cartState, setCartState] = useState(initialCartState);

    useEffect(() => {
        const recipes= recipeService.getRecipes();
        const selectedRecipe=recipes[0];
        setShoppingState({...shoppingState,selectedRecipe,recipes});
    },[]);
    
    const addToCart =() => {
        if(!!shoppingState.selectedRecipe){
          CartService.addToCart(shoppingState.selectedRecipe);
          setCartState({...initialCartState,recipesInCart:CartService.getRecipesInCart()});
        }
    };
    
    const removeFromCart = (recipe) => {
        CartService.removeFromCart(recipe.recipe_id);
        setCartState({...initialCartState,recipesInCart:CartService.getRecipesInCart()});
    };
    
    const getRecipe = (recipeID) => {
       return recipeService.getRecipe(recipeID);
    };
    
    const setSelectedRecipe = (selectedRecipe) => {
        setShoppingState({...shoppingState,selectedRecipe});
    };
  
    return (
        <Context.Provider value={ {...shoppingState ,  ...cartState,
        addToCart:addToCart,  removeFromCart:removeFromCart ,
        getRecipe:getRecipe , setSelectedRecipe:setSelectedRecipe }}>
          {props.children}
        </Context.Provider>
      );
   
}