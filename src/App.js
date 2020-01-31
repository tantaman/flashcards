import React from "react";
import DeckView from "./view/Deck.react";
import Deck from "./model/Deck";
import "./App.css";

const persistedCards = localStorage.getItem("flashcards");
const defaultCards = [
  {
    contentType: "text",
    front: "You have no cards in your deck.",
    back: "Create Cards"
  }
];
let deck = null;

try {
  const cards = JSON.parse(persistedCards);
  if (cards) {
    deck = new Deck(cards);
  } else {
    throw new Error("No persisted cards");
  }
} catch (e) {
  // make an empty deck instance
  deck = new Deck(defaultCards);
}

function App() {
  return (
    <div className="App">
      <DeckView deck={deck} />
    </div>
  );
}

export default App;
