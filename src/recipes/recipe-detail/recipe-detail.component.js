import React, { useEffect } from "react";
import './recipe-detail.component.css';
import PropTypes from "prop-types";


export const RecipeDetail =(props)=> {

    useEffect(() => {
        let recipeID;
        if(!!props.match && !!props.match.params.id){
            recipeID= props.match.params.id;
            const selectedRecipe= props.getRecipe(recipeID);
            props.setSelectedRecipe(selectedRecipe);
        }
       
    },[props.match.params.id]);

    if (!props.selectedRecipe || Object.keys(props.selectedRecipe).length === 0) {
        return (<div></div>);
    }





    const createRow = (listItem,index) => {
        const rows = (<li key={index}>{listItem}</li>);
        return rows;
    };
    const table = (
        <div className="height100pc width100pc">
            <div className="flex-column-container height100pc">
                <div className="flex-row-container flex-item textAlignCenter height55pc" >
                    <div className="flex-item height100pc">
                        <img src={props.selectedRecipe.image_url} className="height100pc" />
                    </div>
                    <div className="flex-item text-block">
                        <h2>{props.selectedRecipe.title}</h2>
                    </div>
                    <div className="flex-item ">
                        <button type="button" className="add-to-cart"
                        onClick={props.addToCart.bind()}>Add</button>
                    </div>
                </div>

                <div className="flex-row-container flex-item darkGreyBG height45pc">
                    <div className="flex-item text-block whiteTextColor width40pc marginLeft5pc height100pc">
                        <h2 className="height20pc no-margin">Ingredients:</h2>
                        <ul className="height80pc no-margin overflow-hidden">
                            {props.selectedRecipe.ingredients.map(createRow)}
                        </ul>
                    </div>
                    <div className="flex-item text-block whiteTextColor width60pc height100pc">
                        <h2 className="height20pc no-margin">Directions:</h2>
                        <ul className="height80pc no-margin  overflow-hidden">
                            {props.selectedRecipe.directions.map(createRow)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
    return table;
}

RecipeDetail.propTypes={
    selectedRecipe:PropTypes.object,
    getRecipe:PropTypes.func,
    setSelectedRecipe:PropTypes.func,
    addToCart:PropTypes.func
};