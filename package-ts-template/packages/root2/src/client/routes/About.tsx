import { useLoaderData, Link } from "react-router";

export function loader() {
  const data = fetch('http://localhost:3000/api/phyre')
      .then(res => res.json());
  return data
} 

export default function About() {
    const data = useLoaderData();
    console.log(data.message); //Look inside server/api/phyre.js to see how it works

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent">
          About
        </h1>
        
        <p className="text-xl text-zinc-400 mb-8">
          Welcome to the about page! <Link to="/app">Click here to go back home</Link>
        </p>
      </div>
    </div>
  );
}