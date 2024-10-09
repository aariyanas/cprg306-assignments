import ItemList from "./item-list";
export default function Page({name, quantity, category}){
    return (
    <main className="bg-zinc-100">
        <h1 className="text-2xl flex border-2 rounded-full p-10 text-lime-900 font-bold">Shopping List</h1>
        <div className="ml-14">
            <ItemList />
        </div>
    </main>
    );
}