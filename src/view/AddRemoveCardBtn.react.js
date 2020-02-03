import React, { useState, useCallback } from "react";
import "./AddRemoveCardBtn.css";
import invariant from "../core-error/invariant";
import FlashcardDeck from "../model/Deck";
import AddCardModal from "./AddCardModal.react.js";

type Props = $ReadOnly<{|
  deck: FlashcardDeck,
  onRemove: () => void,
  onAdd: () => void
|}>;

function AddRemoveCardBtn({ deck, onRemove, onAdd }: Props) {
  invariant(
    onRemove == null || onAdd == null,
    "You cannot specify both onAdd and onRemove"
  );
  invariant(
    !(onRemove == null && onAdd == null),
    "You must specify either onAdd on onRemove"
  );

  const [isAdding, setIsAdding] = useState(false);
  const showAddModal = useCallback(() => setIsAdding(true), []);

  let classNames = "AddRemoveCardBtn";
  let symbol = "+";
  if (onRemove) {
    classNames += " remove";
    symbol = "-";
  }
  return (
    <span className={classNames} onClick={showAddModal}>
      {symbol}
      {isAdding && <AddCardModal deck={deck} />}
    </span>
  );
}

export default AddRemoveCardBtn;
