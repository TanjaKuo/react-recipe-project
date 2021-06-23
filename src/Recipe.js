import React, { useState } from "react";

import "./recipe.css";

export default function Recipe(props) {
  const { calories, title, image, ingredients, cuisineType } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className="item">
      <h1 className="title">
        {title}
        {cuisineType ? (
          <span className="cuisineType">({cuisineType})</span>
        ) : null}
      </h1>
      <ul>Calories: {calories}</ul>

      <button className="openBtn" onClick={() => setOpen(!open)}>
        Show Ingredients
      </button>
      {open ? (
        <ol className="show">
          {ingredients.map((ing) => (
            <li>{ing.text}</li>
          ))}
        </ol>
      ) : (
        <ol className="hide">
          {ingredients.map((ing) => (
            <li>{ing.text}</li>
          ))}
        </ol>
      )}

      <img src={image} alt="" />
    </div>
  );
}

//option 2
/* const Recipe = ({ title, image, calories, ingredients }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredients) => (
          <li>{ingredients.text}</li>
        ))}
      </ol>
      <h2>testing...</h2>
      <p>{calories}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe; */
