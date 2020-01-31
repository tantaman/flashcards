import React, { useState, useCallback } from "react";
import Card from "./Card.react";

import Deck from "../model/Deck";

type Props = $ReadOnly<{|
  deck: Deck
|}>;

const sides = ["front", "back"];
function DeckView({ deck, cardIndex, sideIndex, onClick }: Props) {
  const card = deck.cards()[cardIndex];

  return (
    <div onClick={onClick}>
      <Card card={card} side={sides[sideIndex]} />
    </div>
  );
}

export default DeckView;
