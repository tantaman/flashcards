import React, { useState, useCallback } from "react";
import Card from "./Card.react";

import Deck from "../model/Deck";

type Props = $ReadOnly<{|
  deck: Deck,
  onDeckChange: Deck => void
|}>;

function DeckView({ deck, onDeckChange }: Props) {
  const onDeckClicked = useCallback(() => {
    onDeckChange(deck.advance());
  }, [deck, onDeckChange]);

  const card = deck.top();
  return (
    <div onClick={onDeckClicked}>
      <Card card={card} side={sides[sideIndex]} />
    </div>
  );
}

export default DeckView;
