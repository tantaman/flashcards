import React, { useState } from "react";
import EmptyDeck from "./EmptyDeck.react";
import Card from "./Card.react";

import Deck from "../model/Deck";

type Props = $ReadOnly<{|
  deck: Deck
|}>;

function DeckView({ deck }: Props) {
  const [cardIndex, setCardIndex] = useState(0);

  const card = deck.cards()[cardIndex];
  if (deck.cards().length === 0) {
    return <EmptyDeck />;
  }

  return <Card card={card} />;
}

export default DeckView;
