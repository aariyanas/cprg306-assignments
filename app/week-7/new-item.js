"use client";

import Item from "../week-3/item";
import { useState } from "react";

export default function NewItem({onAddItem}) {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Select a category");


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
        const id= Math.floor(Math.random() * 1000);
        newItem.id = id;
        onAddItem(newItem);
        console.log(newItem);
        alert(`New item added: ${newItem.quantity} ${newItem.name} to category - ${newItem.category}`);
        setName("");
        setQuantity(1);
        setCategory("Select a category");
    }

    return(
        <div>
            <h2 className="text-2xl text-center font-bold text-lime-700 mb-6 pt-8">Add New Item</h2>
            <form onSubmit={(event) => handleSubmit(event)}>
                <div className="flex justify-center">
                    <input className="border border-black mr-2 pl-1" id="name" type="text" placeholder="Enter item name" value={name} required onChange={(event) => setName(event.target.value)}></input>
                    <select className="border border-black ml-2" id="name" type="text" value={category} required onChange={(event) => setCategory(event.target.value)}>
                        <option selected disabled className="text-gray-300">Select a category</option>
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
                </div>
                <div className="mr-2">
                    <p className="text-blue-700 text-xl font-semibold mt-4 text-center">newItem: {quantity}</p>
                    <div className="flex justify-center mb-6">
                        <button type="button" className = "rounded-2xl h-10 w-24 mr-10 bg-cyan-600 text-gray-200 border-2 border-sky-700 hover:bg-cyan-500 hover:text-yellow-950 active:bg-blue-300 active:underline active:text-stone-800 active:border-2 active:border-cyan-600" onClick={increment}>Increment</button>
                        <button type="button" className = "rounded-2xl h-10 w-24 ml-10 bg-pink-700 text-gray-200 border-2 border-pink-900 hover:bg-rose-500 hover:text-yellow-950 active:underline active:bg-rose-30 active:text-stone-800 active:border-2 active:border-pink-700" onClick={decrement}>Decrement</button>
                    </div>
                    <div className="flex justify-center">
                        <input type="submit" value="Add Item" className="bg-blue-900 text-gray-200 hover:bg-blue-400 w-64 p-2 rounded-full text-center bg-emerald-600 border border-green-900 border-2 hover:bg-emerald-400 hover:text-yellow-950 active:bg-emerald-300 active:underline"></input>
                    </div>
                </div>
            </form>
        </div>
    );
}

