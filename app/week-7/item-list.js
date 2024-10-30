"use client";

import Item from "./item";
import itemsJson from "./items.json";
import { useState } from "react";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");
    let items = [...itemsJson];

    const sorted = items.sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
    });

    return(
        <main>
            <button onClick={() => setSortBy("name")}
                style={{backgroundColor: sortBy === "name"? "blue" : "brown"}}> Sort by Name </button>
            <button onClick={() => setSortBy("category")}
                style={{backgroundColor: sortBy === "category"? "blue" : "brown"}}> Sort by Category </button>
            <div> 
                {sorted.map((item) => (<ul key={item.id} className="mb-2"> 
                    <li>{item.name} x{item.quantity}</li>
                    <li>in the {item.category} isle</li>
                    </ul>))}
            </div>   
        </main>
    )
}