import React, { useState, useCallback, useEffect, useRef } from "react";
import DeckView from "./view/Deck.react";
import AddRemoveCardBtn from "./view/AddRemoveCardBtn.react";
import FlashcardDeck, { NewFlashcardDeck, emptyDeckCard } from "./model/Deck";
import "./App.css";
import ZingTouch from "zingtouch";

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
  const [deck, setDeckInner] = useState(intialDeck);
  const deckRef = useRef(deck);

  function setDeck(deck) {
    deckRef.current = deck;
    setDeckInner(deck);
  }

  const onDeckChange = useCallback(deck => {
    setDeck(deck);
  }, []);

  useEffect(() => {
    const container = document.getElementById("deck-container");
    const activeRegion = ZingTouch.Region(container);
    const binding = activeRegion.bind(container, "swipe", e => {
      const data = (e?.detail?.data || [])[0];
      if (data.velocity < 0.25) {
        return;
      }

      // between 170 & 190 we accept
      // between 0 & 10 we accept
      // between 350 & 360 we accept
      if (data.currentDirection >= 170 && data.currentDirection <= 190) {
        // Swiped left
        setDeck(deckRef.current.advance());
        return;
      }

      if (
        (data.currentDirection >= 0 && data.currentDirection <= 10) ||
        (data.currentDirection >= 350 && data.currentDirection <= 360)
      ) {
        // swiped right
        setDeck(deckRef.current.rewind());
      }
    });
    return () => activeRegion.unbind(container, "swipe");
  }, []);

  return (
    <div className="App">
      <div id="deck-container">
        <DeckView deck={deck} />
        <AddRemoveCardBtn deck={deck} onAdd={onDeckChange} />
        <AddRemoveCardBtn deck={deck} onRemove={onDeckChange} />
      </div>
    </div>
  );
}

export default App;
