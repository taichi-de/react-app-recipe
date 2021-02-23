import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title,calories,image,ingredients }) => {
  return(
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <img className={style.image} src={image} alt=""/>
      <ol>
        {ingredients.map(ingredient => (
          <li className={style.text}>{ingredient.text}</li>
        ))}
      </ol>
      <p className={style.calories}>{calories.toFixed(0)} kcal</p>
    </div>
  );
};

export default Recipe;
