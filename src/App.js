import React from "react";
import DeckView from "./view/Deck.react";
import Deck from "./model/Deck";
import logo from "./logo.svg";
import "./App.css";

const deck = new Deck([]);

function App() {
  return (
    <div className="App">
      <DeckView deck={deck} />
    </div>
  );
}

export default App;
