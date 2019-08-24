import React from "react";
import './recipe-list.component.css';
import PropTypes from "prop-types";


export const RecipeList = (props) => {
    if (!props.recipes || props.recipes.length === 0) {
        return (<div></div>);
    }
    const createRow = (recipeItem) => {
        const rows = (<li key={recipeItem.recipe_id} onClick={()=>{
            props.history.push(`/recipes/${recipeItem.recipe_id}`)}}>{recipeItem["title"]}</li>);
        return rows;
    };
    const table = (
        <div className="flex-column-container lightBlueBG scroll-box">
            <div className="flex-item text-block paleBlackTextColor ">
                <ul className="recipe-item">
                    {props.recipes.map(createRow.bind({}))}
                </ul>
            </div>
        </div>
    );
    return table;
}

RecipeList.propTypes={
    recipes:PropTypes.array,
    history:PropTypes.any
};