"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page(){
    const [items, setItems] = useState([...itemsData]);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (item) => {
        console.log("This is the item", item);
        setItems([...items, item]);
    }

    const handleItemSelect = (item) => {
        setSelectedItemName(item.name);
    }
    
    return (
    <main className="bg-zinc-100">
        <div className="ml-14">
            <NewItem onAddItem={handleAddItem}/>
            <h1 className="text-2xl flex p-4 text-lime-900 font-bold">Shopping List</h1>
            <ItemList items={items} />
        </div>
    </main>
    ); 
}