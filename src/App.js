import React, { useCallback, useState } from "react";
import DeckView from "./view/Deck.react";
import AddRemoveCardBtn from "./view/AddRemoveCardBtn.react";
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

// This is interesting.
// We've doing the state management of what card is being viewed and
// what side is shown within the view.

// We could do it within the Deck domain model class. The advantage of doing
// it in the deck is that we can have different paging algorithms
// and different numbers of sides to cards and so on.
// The disadvantage seemed to be complexity?
const sides = ["front", "back"];
function App() {
  const [cardIndex, setCardIndex] = useState(0);
  const [sideIndex, setSideIndex] = useState(0);

  const onDeckClicked = useCallback(() => {
    const newSideIndex = (sideIndex + 1) % sides.length;
    if (newSideIndex === 0) {
      // advance to the next card.
      setCardIndex((cardIndex + 1) % deck.cards().length);
    }

    setSideIndex(newSideIndex);
  }, [deck, cardIndex, sideIndex]);

  const onAdd = useCallback(() => {}, []);
  const onRemove = useCallback(() => {}, []);
  return (
    <div className="App">
      <div className="App-deckHolder">
        <AddRemoveCardBtn mode="add" onAdd={onAdd} />
        <AddRemoveCardBtn mode="remove" onRemove={onRemove} />
        <DeckView
          deck={deck}
          cardIndex={cardIndex}
          sideIndex={sideIndex}
          onClick={onDeckClicked}
        />
      </div>
    </div>
  );
}

export default App;
