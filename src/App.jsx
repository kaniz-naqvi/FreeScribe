import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col">
      <section className="min-h-screen flex flex-col">
        <Header />
        <HomePage />
      </section>
    </div>
  );
}

export default App;
