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
            <div className="flex">
                <h1 className="text-2xl pr-4 pl-0 text-lime-900 font-bold mt-3 mb-2 underline">Shopping List</h1>
                <div className="mt-3">
                    <button className="mr-4 py-0.5 px-2 rounded-2xl border-2 border-sky-950 text-sky-950" onClick={() => setSortBy("name")}
                        style={{backgroundColor: sortBy === "name"? "#fbbf24" : "#ca8a04"}}> Sort by Name </button>
                    <button className="px-2 py-0.5 rounded-2xl border-2 border-sky-950 text-sky-950" onClick={() => setSortBy("category")}
                        style={{backgroundColor: sortBy === "category"? "#fbbf24" : "#ca8a04"}}> Sort by Category </button>
                </div>
            </div>
            <div> 
                {sorted.map((item) => (<ul key={item.id} className="mb-2"> 
                    <li>{item.name} x{item.quantity}</li>
                    <li>in the {item.category} isle</li>
                    </ul>))}
            </div>   
        </main>
    )
}