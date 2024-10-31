"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page(){
    const [items, setItems] = useState([...itemsData]);

    const handleAddItem = (item) => {
        console.log("This is the item", item);
        setItems([...items, item]);
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