import React from "react";
import type Flashcard from "../model/Deck";
import "./Card.css";

type Props = $ReadOnly<{| card: Flashcard |}>;

function CardView({ card }: Props) {
  const contentType = card.getContentType();
  console.log(card);

  switch (contentType) {
    case "text":
      return <div className="Card">{card.getVisibleSide("normal")}</div>;
    default:
      throw new Error("Unhandled type " + contentType);
  }
}

export default CardView;
