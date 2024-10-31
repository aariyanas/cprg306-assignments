import ItemList from "./item-list";
export default function Page({name, quantity, category}){
    return (
    <main className="bg-zinc-100">
        <h1 className="text-3xl flex p-10 ml-3 text-lime-900 font-bold underline">Shopping List</h1>
        <div className="ml-14">
            <ItemList />
        </div>
    </main>
    );
}