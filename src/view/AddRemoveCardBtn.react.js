import React from "react";
import "./AddRemoveCardBtn.css";
import Deck from "../model/Deck";

type Props = $ReadOnly<{|
  mode: "add" | "remove",
  onAdd?: () => void,
  onRemove?: () => void
|}>;

function AddRemoveCardBtn({ mode, onAdd, onRemove }: Props) {
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
