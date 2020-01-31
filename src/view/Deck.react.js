import React, { useState, useCallback } from "react";
import EmptyDeck from "./EmptyDeck.react";
import Card from "./Card.react";

import Deck from "../model/Deck";

type Props = $ReadOnly<{|
  deck: Deck
|}>;

function DeckView({ deck }: Props) {
  const [cardIndex, setCardIndex] = useState(0);
  const onDeckClicked = useCallback(() => {
    setCardIndex((cardIndex + 1) % deck.cards().length);
  }, [deck, cardIndex]);

  const card = deck.cards()[cardIndex];
  if (deck.cards().length === 0) {
    return <EmptyDeck />;
  }

  return (
    <div onClick={onDeckClicked}>
      <Card card={card} />
    </div>
  );
}

export default DeckView;
