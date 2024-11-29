"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList({items}) {
    const [sortBy, setSortBy] = useState("name");

    const sorted = items.sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
    });

    return(
        <main>
            <button className="mr-6 p-2 rounded-2xl" onClick={() => setSortBy("name")}
                style={{backgroundColor: sortBy === "name"? "#ecfccb" : "brown"}}> Sort by Name </button>
            <button className="p-2 rounded-2xl" onClick={() => setSortBy("category")}
                style={{backgroundColor: sortBy === "category"? "blue" : "brown"}}> Sort by Category </button>
            <div className="pt-4"> 
                {sorted.map((item) => (<ul key={item.id} className="mb-2"> 
                    <li onSelect={handleItemSelect}>{item.name} x{item.quantity}</li>
                    <li>in the {item.category} isle</li>
                    </ul>))}
            </div>   
        </main>
    )
}