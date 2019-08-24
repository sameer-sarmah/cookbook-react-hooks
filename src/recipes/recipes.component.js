import React, { useContext } from "react";
import { RecipeDetail } from './recipe-detail/recipe-detail.component';
import {RecipeList} from './recipe-list/recipe-list.component';
import './recipes.component.css';
import {Context} from "./../context/context"


export const RecipeComponent = (props) => {
    const {recipes,selectedRecipe,getRecipe,setSelectedRecipe,addToCart} = useContext(Context);
    const panel = (
            <div className="flex-item flex-row-container height100pc width100pc" >
                <div className="width30pc" >{<RecipeList  {...props} recipes={recipes}/>}</div>
                <div className="width70pc">{<RecipeDetail  {...props} selectedRecipe={selectedRecipe}
                    getRecipe={getRecipe}  setSelectedRecipe={setSelectedRecipe} addToCart={addToCart}
                />}</div>
            </div>
    );
    return panel;
}

