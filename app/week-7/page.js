"use client";

import { useState } from "react";
import ItemList from "./item-list";
import Quantity from "./new-item";
import itemsData from "./items.json";

export default function Page({name, quantity, category}){
    const [items, setItems] = useState([...itemsData]);

    const handleAddItem = (event) => {
        event.preventDefault();
        setItems([...items, Quantity]);
    }
    
    return (
    <main className="bg-zinc-100">
        <h1 className="text-2xl flex border-2 rounded-full p-10 text-lime-900 font-bold">Shopping List</h1>
        <div className="ml-14">
            <Quantity onAddItem={handleAddItem}/>
            <ItemList items={items} />
        </div>
    </main>
    );
}