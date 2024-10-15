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

    const handleSubmit = (event) => {
        event.preventDefault();
        let newItem = {name, quantity, category};
        console.log(newItem);
        alert(`New item added: ${newItem.quantity} ${newItem.name} to category - ${newItem.category}`);
        setName("");
        setQuantity(1);
        setCategory("Produce");
    }

    return(
        <div>
            <h2 className="text-2xl text-center font-bold text-lime-700 mb-12">Add New Item</h2>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input className="border border-black" id="name" type="text" value={name} required onChange={(event) => setName(name)}></input>
                <select className="border border-black" id="name" type="text" value={category} required onChange={(event) => setCategory(category)}>
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Household">Household</option>
                    <option value="Frozen">Frozen</option>
                    <option value="Condiments">Condiments</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Personal Care">Personal Care</option>
                </select>
                <p className="text-blue-700 text-xl font-semibold text-center">Quantity: {quantity}</p>
                <div className="flex justify-center">
                    <button className = "rounded-2xl px-8 py-4 my-4 ml-14 mr-8 bg-cyan-600  text-gray-200 border-2 border-sky-700 hover:bg-cyan-500 hover:text-yellow-950 hover:underline active:bg-blue-300 active:no-underline active:text-stone-800 active:border-2 active:border-cyan-600" onClick={increment}>Increment</button>
                    <button className = "rounded-2xl px-8 py-4 my-4 ml-20 mr-8 bg-pink-700 text-gray-200 border-2 border-pink-900 hover:bg-rose-400 hover:text-yellow-950 hover:underline active:bg-rose-300 active:no-underline active:text-stone-800 active:border-2 active:border-pink-700" onClick={decrement}>Decrement</button>
                </div>
                <input type="submit" value="Add Item" className="bg-blue-900 text-slate-300 hover:bg-blue-400"></input>
            </form>
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
