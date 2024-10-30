import ItemList from "./item-list";
export default function Page({name, quantity, category}){
    return (
    <main className="bg-zinc-100 pt-4">
        <h1 className="text-4xl flex border-2  border border-lime-800 rounded-full p-10 text-lime-900 font-bold justify-center bg-gradient-to-r from-amber-500 to-pink-500 mx-8">Shopping List</h1>
        <div className="ml-20 pt-4">
            <ItemList />
        </div>
    </main>
    );
}