import React from "react";
import "./AddRemoveCardBtn.css";
import Deck from "../model/Deck";

type Props = $ReadOnly<{|
  mode: "add" | "remove",
  deck: Deck
|}>;

function AddRemoveCardBtn({ mode }: Props) {
  const onRemove = () => null;
  const onAdd = () => null;

  let classNames = "AddRemoveCardBtn";
  let symbol = "+";
  let onClick = mode === "remove" ? onRemove : onAdd;
  if (mode === "remove") {
    classNames += " remove";
    symbol = "-";
  }
  return (
    <span className={classNames} onClick={onClick}>
      {symbol}
    </span>
  );
}

export default AddRemoveCardBtn;
