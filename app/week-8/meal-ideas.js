"use client";
import { useEffect, useState } from "react";

export default function MealIdeas(ingredient) {
    const [meals, setMeals] = useState([]);
    
    const loadMeals = () => {
        setMeals(fetchMealIdeas(ingredient));
    };

    useEffect(() => {
        loadMeals();
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Ideas</h2>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    );
}

function fetchMealIdeas(ingredient) {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then((response) => response.json())
        .then((data) => {setMeals(data.meals)}, [ingredient]);
}
