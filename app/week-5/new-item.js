"use client";

import Item from "../week-3/item";
import { useState } from "react";

export default function Quantity(){
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    const increment = () => {
        if (quantity < 20){
            setQuantity(quantity + 1);
            console.log(quantity);
        }
    };

    const decrement = () => {
        if (quantity > 1){
            setQuantity(quantity-1);
        console.log(quantity);
        }
    };

    return(
        <div>
            <p className="text-lime-700 text-2xl font-bold text-center">Quantity: {quantity}</p>
            <div className="flex justify-center">
                <button className = "rounded-2xl px-8 py-4 my-4 ml-14 mr-8 bg-cyan-600  text-gray-200 border-2 border-sky-700 hover:bg-cyan-500 hover:text-yellow-950 hover:underline active:bg-blue-300 active:no-underline active:text-stone-800 active:border-2 active:border-cyan-600" onClick={increment}>Increment</button>
                <button className = "rounded-2xl px-8 py-4 my-4 ml-20 mr-8 bg-pink-700 text-gray-200 border-2 border-pink-900 hover:bg-rose-400 hover:text-yellow-950 hover:underline active:bg-rose-300 active:no-underline active:text-stone-800 active:border-2 active:border-pink-700" onClick={decrement}>Decrement</button>
                <input type="text">
                    <label className="text-lime-700 text-2xl font-bold text-center">{name}</label>
                </input>
            </div>
        </div>
    );
}

export function handleSubmit(){
    const newItem = {
        name: Item.name,
        quantity: Item.quantity,
        category: Item.category
    };
    console.log(newItem);
    alert(`New item added: ${newItem.quantity} ${newItem.name} to category - ${newItem.category}`);
    newItem.reset();
}
