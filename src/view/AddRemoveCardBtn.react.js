import React, { useCallback } from "react";
import "./AddRemoveCardBtn.css";
import invariant from "../core-error/invariant";
import FlashcardDeck, { Flashcard } from "../model/Deck";

type Props = $ReadOnly<{|
  deck: FlashcardDeck,
  onRemove: () => void,
  onAdd: () => void
|}>;

let newCardNum = 0;
function AddRemoveCardBtn({ deck, onRemove, onAdd }: Props) {
  invariant(
    onRemove == null || onAdd == null,
    "You cannot specify both onAdd and onRemove"
  );
  invariant(
    !(onRemove == null && onAdd == null),
    "You must specify either onAdd or onRemove"
  );

  const onAddClick = useCallback(() => {
    ++newCardNum;
    onAdd(
      deck.addCard(
        new Flashcard({
          contentType: "text",
          sides: [
            "New Card (" + newCardNum + ") Front",
            "New Card (" + newCardNum + ") Back"
          ],
          currentSide: 0
        })
      )
    );
  }, [deck, onAdd]);
  const onRemoveClick = useCallback(() => {
    onRemove(deck.deleteTopCard());
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
