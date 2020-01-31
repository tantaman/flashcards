import React from "react";
import DeckView from "./view/Deck.react";
import Deck from "./model/Deck";
import "./App.css";

const deck = new Deck([
  {
    contentType: "text",
    front: "Water",
    back: "x"
  },
  {
    contentType: "text",
    front: "To go",
    back: "x"
  }
]);

function App() {
  return (
    <div className="App">
      <DeckView deck={deck} />
    </div>
  );
}

export default App;
