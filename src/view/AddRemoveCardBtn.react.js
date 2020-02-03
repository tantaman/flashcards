import React, { useCallback } from "react";
import "./AddRemoveCardBtn.css";
import invariant from "../core-error/invariant";
import FlashcardDeck from "../model/Deck";

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
    "You must specify either onAdd or onRemove"
  );

  const onAddClick = useCallback(() => {}, []);
  const onRemoveClick = useCallback(() => {
    deck.deleteTopCard();
    onRemove(deck);
  }, [deck, onRemove]);
  const onClick = onRemove ? onRemoveClick : onAddClick;

  let classNames = "AddRemoveCardBtn";
  let symbol = "+";
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
