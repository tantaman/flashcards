import React from "react";
import type Card from "../model/Deck";
import "./Card.css";

type Props = $ReadOnly<{| card: Card |}>;

function CardView({ card }: Props) {
  const contentType = card.contentType;
  if (contentType == null) {
    return <div className="Card">{card}</div>;
  }

  switch (contentType) {
    case "text":
      return <div className="Card">{card.content}</div>;
    default:
      throw new Error("Unhandled type " + contentType);
  }
}

export default CardView;
