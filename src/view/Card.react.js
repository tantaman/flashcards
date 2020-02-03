import React from "react";
import type Flashcard from "../model/Deck";
import "./Card.css";

type Props = $ReadOnly<{| card: Flashcard |}>;

function CardView({ card }: Props) {
  // Enable editing of a card when someone double taps into it
  const contentType = card.getContentType();

  switch (contentType) {
    case "text":
    case "emptyDeckMessage":
    case "cardCreator":
      return <div className="Card">{card.getVisibleSide("normal")}</div>;
    default:
      throw new Error("Unhandled type " + contentType);
  }
}

export default CardView;
