import React, { useState, useCallback } from "react";
import EmptyDeck from "./EmptyDeck.react";
import Card from "./Card.react";

import Deck from "../model/Deck";

type Props = $ReadOnly<{|
  deck: Deck
|}>;

const sides = ["front", "back"];

function DeckView({ deck }: Props) {
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

  const card = deck.cards()[cardIndex];
  if (deck.cards().length === 0) {
    return <EmptyDeck />;
  }

  return (
    <div onClick={onDeckClicked}>
      <Card card={card} side={sides[sideIndex]} />
    </div>
  );
}

export default DeckView;
