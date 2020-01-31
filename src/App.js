import React from "react";
import DeckView from "./view/Deck.react";
import Deck from "./model/Deck";
import "./App.css";

const deck = new Deck(["Water", "Milk", "To go", "To do", "Make-up"]);

function App() {
  return (
    <div className="App">
      <DeckView deck={deck} />
    </div>
  );
}

export default App;
