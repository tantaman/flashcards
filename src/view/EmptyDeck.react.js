import React from "react";
import Card from "./Card.react";

const emptyCard = {
  contentType: "text",
  content: "You have no cards in your deck."
};
function EmptyDeck() {
  return <Card card={emptyCard} />;
}

export default EmptyDeck;
