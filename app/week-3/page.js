import ItemList from "./item-list";
export default function Page({name, quantity, category}){
    return (
    <main>
        <h1>Shopping List</h1>
        <div>
            <ItemList />
        </div>
    </main>
    );
}