import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import "./App.css";

// enter your own api id && key
// https://developer.edamam.com/
const App = () => {
  const apiId = "9ad35e83";
  const apiKey = "cf29183161ab090b1bf57962ef4e80f2";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipe();
    console.log("running");
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${apiId}&app_key=${apiKey}`
    );

    // old api `https://api.edamam.com/search?q=${query}&app_id=${apiId}&app_key=${apiKey}`

    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="container">
      <div className="searchBar">
        <form onSubmit={getSearch}>
          <h2>What is today's dinner?</h2>
          <input
            placeholder=" beef noodle soup"
            value={search}
            onChange={updateSearch}
            className="search"
            type="text"
          />
          <button className="btn" type="submit">
            search
          </button>
        </form>
      </div>

      <div className="showItem">
        {recipes.map((res) => (
          <Recipe
            key={res.recipe.calories}
            title={res.recipe.label}
            image={res.recipe.image}
            ingredients={res.recipe.ingredients}
            calories={res.recipe.calories}
            cuisineType={res.recipe.cuisineType}
            mealType={res.recipe.mealType}
            totalTime={res.recipe.totalTime}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
