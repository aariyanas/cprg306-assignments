import Quantity from "./new-item";

export default function Page(){
    return(
        <main className="h-screen bg-zinc-50">
            <h1>Adding/Removing new items and stuff</h1>
            <Quantity />
        </main>
    );
}