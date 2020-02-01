export type Card = $ReadOnly<{
  contentType: "text",
  sides: $ReadOnlyArray<string>,
  currentSide: number
}>;

class Deck {
  _cards: $ReadOnlyArray<Card>;
  _cardIndex = 0;

  constructor(cards: $ReadOnlyArray<Card>) {
    this._cards = cards;
  }

  cards(): $ReadOnlyArray<Card> {
    return this._cards;
  }

  advance(): Deck {
    const newSideIndex = (this._sideIndex + 1) % sides.length;
    let newCardIndex = this._cardIndex;
    if (newSideIndex === 0) {
      newCardIdnex = (this._cardIndex + 1) % this._cards.length;
    }

    const ret = this._copy();
    ret._cardIndex = newCardIdnex;

    return ret;
  }

  _copy(): Deck {
    const ret = new Deck(this._cards);
    ret._cardIndex = this._cardIndex;
    return ret;
  }

  top(): Card {
    return this._card[this._cardIndex];
  }
}

export class NewDeck extends Deck {
  constructor() {
    super([
      {
        contentType: "text",
        front: "You have no cards in your deck.",
        back: "Create Cards"
      }
    ]);
  }

  _copy() {
    return new NewDeck();
  }
}

export default Deck;
