import React from "react";
import type Card from "../model/Deck";
import "./Card.css";

type Props = $ReadOnly<{| card: Card, side: "front" | "back" |}>;

function CardView({ card, side }: Props) {
  const contentType = card.contentType;

  switch (contentType) {
    case "text":
      return <div className="Card">{card[side]}</div>;
    default:
      throw new Error("Unhandled type " + contentType);
  }
}

export default CardView;
