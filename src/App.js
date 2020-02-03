import React, { useState, useCallback } from "react";
import DeckView from "./view/Deck.react";
import AddRemoveCardBtn from "./view/AddRemoveCardBtn.react";
import FlashcardDeck, { NewFlashcardDeck } from "./model/Deck";
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
  intialDeck = new NewFlashcardDeck();
}

function App() {
  const [deck, setDeck] = useState(intialDeck);

  const onDeckChange = useCallback(deck => {
    setDeck(deck);
  }, []);
  const onAddCard = useCallback(() => {}, []);
  const onRemoveCard = useCallback(() => {}, []);

  return (
    <div className="App">
      <div className="App-deckHolder">
        <AddRemoveCardBtn onAdd={onAddCard} />
        <AddRemoveCardBtn onRemove={onRemoveCard} />
        <DeckView deck={deck} onDeckChange={onDeckChange} />
      </div>
      <div id="modal-holder"></div>
    </div>
  );
}

export default App;
