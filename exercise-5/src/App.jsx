import React from "react";
import { CARDS_DATA } from "./data.js";
import Card from "./components/Card.jsx";

function App() {
  return (
    <>
      <header>
        <h1>My Items</h1>
      </header>
      <main className="cards-view">
        <div className="cards-grid">
          {CARDS_DATA.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;