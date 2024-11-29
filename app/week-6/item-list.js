"use client";

import { handleSubmit } from "../week-7/new-item";
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
            <div className="flex pb-3 text-xl">
                Sort by:
                <button className="ml-3 py-2 px-4 rounded-2xl border-2 border-cyan-950 text-cyan-950" onClick={() => setSortBy("name")}
                    style={{backgroundColor: sortBy === "name"? "#fbbf24" : "#14b8a6"}}> Name </button>
                <button className="ml-3 py-2 px-4 rounded-2xl border-2 border-cyan-950 text-cyan-950" onClick={() => setSortBy("category")}
                    style={{backgroundColor: sortBy === "category"? "#fbbf24" : "#14b8a6"}}> Category </button>
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