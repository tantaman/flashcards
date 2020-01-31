import React from "react";
import DeckView from "./view/Deck.react";
import Deck, { NewDeck } from "./model/Deck";
import "./App.css";

const persistedCards = localStorage.getItem("flashcards");
let deck;

try {
  const cards = JSON.parse(persistedCards);
  if (cards) {
    deck = new Deck(cards);
  } else {
    throw new Error("No persisted cards");
  }
} catch (e) {
  // make a new deck instance
  deck = new NewDeck();
}

function App() {
  return (
    <div className="App">
      <DeckView deck={deck} />
    </div>
  );
}

export default App;
