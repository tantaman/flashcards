import React from "react";
import "./AddRemoveCardBtn.css";
import Deck from "../model/Deck";

type Props = $ReadOnly<{|
  onRemove
|}>;

function AddRemoveCardBtn({ onRemove, onAdd }: Props) {
  invariant(onRemove == null || onAdd == null, 'You cannot specify both on add and onRemove');
  invariant(!(onRemove == null && onAdd == null), 'You must specify either onAdd on onRemove')

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
