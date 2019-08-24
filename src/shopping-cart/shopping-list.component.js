import React, { useContext } from "react";
import "./shopping-list.component.css";
import { Context } from "./../context/context";
import PropTypes from "prop-types";


const createRow =(removeFromCartRef,addedRecipe) => {
  const item = (
    <div
      className="flex-row-container list-item align-center"
      key={addedRecipe.recipe_id}
    >
      <div className="image-container flex-item">
        <img src={addedRecipe.image_url} />
      </div>
      <div className="text-container flex-column-container flex-item">
        <h3 className="flex-item">Recipe Item:{addedRecipe.recipe_id}</h3>
        <h3 className="flex-item">{addedRecipe.title}</h3>
        <div className="flex-item">Social Rank:{addedRecipe.social_rank}</div>
      </div>
      <div className="flex-row-container list-item align-center">
        <div
          className="flex-item svg-icon"
          onClick={removeFromCartRef.bind(this, addedRecipe)}
        >
          <img src={require("../images/rubbish-bin.svg")} />
        </div>
      </div>
    </div>
  );
  return item;
}

export const  ShoppingListComponent = (props) => {

    const {recipesInCart ,removeFromCart} = useContext(Context);
     if (!recipesInCart || recipesInCart.length === 0) {
      return (
        <div>
          <p>The Shopping cart is empty</p>
        </div>
      );
    } else {
      return (
        <div className="flex-item flex-row-container width100pc height100pc align-center">
          <div>{recipesInCart.map(createRow.bind({},removeFromCart))}</div>
        </div>
      );
    }
}

ShoppingListComponent.propTypes={
  recipesInCart:PropTypes.array,
  removeFromCart:PropTypes.func
};

