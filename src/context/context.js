import React, { Component } from 'react';
import {CartService} from "./../services/cart-service.service";
import {RecipeService} from "./../services/recipe.service";

export const Context = React.createContext();

// Then create a provider Component
export class Provider extends Component {
  state = {
    recipes: [],
    selectedRecipe: null,
    recipesInCart:[]
   };
   recipeSvc=new RecipeService();

    componentDidMount(){
      const recipes=this.recipeSvc.getRecipes();
      const selectedRecipe=recipes[0];
      this.setState({...this.state,recipes,selectedRecipe});
    }

    addToCart(){
        if(!!this.state.selectedRecipe){
          CartService.addToCart(this.state.selectedRecipe);
          this.setState({...this.state,recipesInCart:CartService.getRecipesInCart()});
        }
    }

    removeFromCart(recipe) {
        CartService.removeFromCart(recipe.recipe_id);
        this.setState({...this.state,recipesInCart:CartService.getRecipesInCart()})
    }

    getRecipe(recipeID){
       return this.recipeSvc.getRecipe(recipeID);
    }

    setSelectedRecipe(selectedRecipe){
        this.setState({...this.state,selectedRecipe});
    }

  render() {
    return (
      <Context.Provider value={ {...this.state ,  
      addToCart:this.addToCart.bind(this),  removeFromCart:this.removeFromCart.bind(this) ,
      getRecipe:this.getRecipe.bind(this) , setSelectedRecipe:this.setSelectedRecipe.bind(this) }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}