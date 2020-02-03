import React from "react";
import "./AddRemoveCardBtn.css";
import invariant from "../core-error/invariant";
import Deck from "../model/Deck";

type Props = $ReadOnly<{|
  onRemove: () => void,
  onAdd: () => void
|}>;

function AddRemoveCardBtn({ onRemove, onAdd }: Props) {
  invariant(
    onRemove == null || onAdd == null,
    "You cannot specify both on add and onRemove"
  );
  invariant(
    !(onRemove == null && onAdd == null),
    "You must specify either onAdd on onRemove"
  );

  let classNames = "AddRemoveCardBtn";
  let symbol = "+";
  const onClick = onAdd || onRemove;
  if (onRemove) {
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
