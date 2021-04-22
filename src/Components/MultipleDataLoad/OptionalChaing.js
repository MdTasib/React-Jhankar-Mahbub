import React, { useState, useEffect } from 'react';
import MealFinder from './MealFinder';

const OptionalChaing = () => {

    const [meal, setMeal] = useState({})
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [])

    return (
        <div>
            <h3>This is meal details</h3>
            <h3>Name : {meal.strMeal}</h3>
            <MealFinder />
        </div>
    );
};

export default OptionalChaing;