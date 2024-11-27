"use client";
import { useEffect, useState } from "react";

export default function MealIdeas(ingredient) {
    const [meals, setMeals] = useState([]);
    
}

function fetchMealIdeas(ingredient) {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then((response) => response.json())
        .then((data) => {
            setMeals(data.meals);
        });
}
