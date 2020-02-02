import React from "react";
import DeckView from "./view/Deck.react";
import AddRemoveCardBtn from "./view/AddRemoveCardBtn.react";
import FlashcardDeck, { NewFlashcardDeck } from "./model/Deck";
import "./App.css";

const persistedCards = localStorage.getItem("flashcards");
let deck;

try {
  const cards = JSON.parse(persistedCards);
  if (cards) {
    deck = new FlashcardDeck(cards);
  } else {
    throw new Error("No persisted cards");
  }
} catch (e) {
  // make a new deck instance
  deck = new NewFlashcardDeck();
}

function App() {
  return (
    <div className="App">
      <div className="App-deckHolder">
        <AddRemoveCardBtn mode="add" deck={deck} />
        <AddRemoveCardBtn mode="remove" deck={deck} />
        <DeckView deck={deck} />
      </div>
    </div>
  );
}

export default App;
