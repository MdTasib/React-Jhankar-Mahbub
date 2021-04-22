import React, { useState, useEffect } from 'react';

const MealFinder = () => {

    const [search, setSearch] = useState('');

    const handleChange = event => {
        setSearch(event.target.value)
    }

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(response => response.json())
            .then(data => setMeals(data.meals)
            )
    }, [search])
    console.log(meals);


    return (
        <div>
            <h3>Find Delicios foods</h3>
            <input onChange={handleChange} type="text" placeholder='Search..' />
            <p>Search : {search}</p>
            <p>Meals length : {meals?.length || 0}</p>
            {
                meals?.map(meal => <li>{meal.strMeal}</li>)
            }
        </div>
    );
};

export default MealFinder;