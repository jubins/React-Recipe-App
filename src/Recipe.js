import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <h3>Ingredients:</h3>
            <ol>
                {ingredients.map(ingredient => (
                    <li key={title+'_'+Math.random().toString(36).slice(-5)}>{ingredient.text}</li>
                ))}
            </ol>
            <h3>Calories: </h3>
            <p>{calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
}

export default Recipe;
