import React, { useState, useCallback } from "react";
import DeckView from "./view/Deck.react";
import AddRemoveCardBtn from "./view/AddRemoveCardBtn.react";
import FlashcardDeck, { NewFlashcardDeck, emptyDeckCard } from "./model/Deck";
import "./App.css";

const persistedCards = localStorage.getItem("flashcards");
let intialDeck;

try {
  const cards = JSON.parse(persistedCards);
  if (cards) {
    intialDeck = new FlashcardDeck(cards);
  } else {
    throw new Error("No persisted cards");
  }
} catch (e) {
  // make a new deck instance
  intialDeck = new FlashcardDeck([emptyDeckCard()]);
}

function App() {
  const [deck, setDeck] = useState(intialDeck);

  const onDeckChange = useCallback(deck => {
    setDeck(deck);
  }, []);

  return (
    <div className="App">
      <DeckView deck={deck} onDeckChange={onDeckChange} />
      <AddRemoveCardBtn deck={deck} onAdd={onDeckChange} />
      <AddRemoveCardBtn deck={deck} onRemove={onDeckChange} />
    </div>
  );
}

export default App;
