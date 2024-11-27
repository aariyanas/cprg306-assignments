import Link from "next/link";

export default function Page(){
  return (
  <div className="h-screen bg-lime-100">
    <h1 className="p-4 mb-8 text-lime-100 text-4xl font-bold text-center border-8 border-emerald-800 bg-gradient-to-bl from-rose-600 to-teal-700">CPRG 306: Web Development 2 - Assignments</h1>
    <ol className="list-disc list-inside text-center text-lime-900 text-xl">
      <li> Week 2 - click <Link className=" font-semibold hover:underline hover:text-blue-600" href="http://localhost:3000/week-2"> here!</Link>
      </li>
      <li>
        Week 3 - click <Link className=" font-semibold hover:underline hover:text-blue-600" href="http://localhost:3000/week-3"> here!</Link>
      </li>
      <li>
        Week 4 - click <Link className=" font-semibold hover:underline hover:text-blue-600" href="http://localhost:3000/week-4"> here!</Link>
      </li>
      <li>
        Week 5 - click <Link className=" font-semibold hover:underline hover:text-blue-600" href="http://localhost:3000/week-5"> here!</Link>
      </li>
      <li>
        Week 6 - click <Link className=" font-semibold hover:underline hover:text-blue-600" href="http://localhost:3000/week-6"> here!</Link>
      </li>
      <li>
        Week 7 - click <Link className=" font-semibold hover:underline hover:text-blue-600" href="http://localhost:3000/week-7"> here!</Link>
      </li>
      <li>
        Week 8 - click <Link className=" font-semibold hover:underline hover:text-blue-600" href="http://localhost:3000/week-8"> here!</Link>
      </li>
    </ol>
  </div>
  )
};