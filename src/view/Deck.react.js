import React, { useCallback } from "react";
import Card from "./Card.react";

import Deck from "../model/Deck";

type Props = $ReadOnly<{|
  deck: Deck
|}>;

function DeckView({ deck, onDeckChange }: Props) {
  // move gesture code to this component?
  return <Card card={deck.top()} />;
}

export default DeckView;
