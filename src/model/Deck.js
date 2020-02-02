// TODO: do a more "strut.io like" model and allow
// a card to be composed of components, each with a content type?
export type SerializedFlashcard = $ReadOnly<{
  contentType: "text",
  sides: $ReadOnlyArray<string>,
  currentSide: number
}>;

type Perspective = "normal" | "flipped";

export class Flashcard {
  constructor(data: SerializedFlashcard) {
    this._data = data;
  }

  advance(perspective: Perspective): Flashcard {
    const data = { ...this._data };
    const step = perspective === "normal" ? 1 : -1;
    data.currentSide = Math.abs((data.currentSide + step) % data.sides.length);
    return new Flashcard(data);
  }

  getVisibleSide(perspective: Perspective): string {
    return this._data.sides[this._data.currentSide];
  }

  getContentType(): string {
    return this._data.contentType;
  }

  isStartingSide(perspective: Perspective): boolean {
    switch (perspective) {
      case "normal":
        return this._data.currentSide === 0;
      case "flipped":
        return this._data.currentSide === this._data.sides.length - 1;
    }
  }
}

// Don't think of the deck class as simply representing a deck of cards.
// It represents the game rules too. Maybe this would better be called
// "game"?
export default class FlashcardDeck {
  _cards: $ReadOnlyArray<Flashcard>;
  _cardIndex = 0;

  constructor(cards: $ReadOnlyArray<Flashcard>) {
    this._cards = cards;
  }

  cards(): $ReadOnlyArray<Flashcard> {
    return this._cards;
  }

  advance(): FlashcardDeck {
    const card = this._cards[this._cardIndex].advance();

    // duplicate the record since all data should be immutable.
    // TODO: language support for easier duplication?
    // TODO: immutable.js for data structures?
    const ret = this._copy();
    ret._cards[ret._cardIndex] = card;

    // The card has been flipped back to its initial state
    // advance to the next card.
    if (card.isStartingSide()) {
      ret._cardIndex = (ret._cardIndex + 1) % ret._cards.length;
    }

    return ret;
  }

  // TODO: this class needs to be generic so `addCard` can take the
  // appropriately typed card for the given game.
  // The card making view will differ per game type as each game type
  // requires different card parameters.
  addCard(card: Flashcard): FlashcardDeck {
    const ret = this._copy();

    ret._cards.splice(this._cardIndex, 0, card);
    return ret;
  }

  deleteTopCard(): FlashcardDeck {
    const ret = this._copy();
    ret._cards.splice(this._cardIndex, 1);
    return ret;
  }

  _copy(): FlashcardDeck {
    const ret = new FlashcardDeck(this._cards.slice());
    ret._cardIndex = this._cardIndex;
    return ret;
  }

  top(): Flashcard {
    return this._cards[this._cardIndex];
  }
}

export class NewFlashcardDeck extends FlashcardDeck {
  constructor() {
    super([
      new Flashcard({
        contentType: "text",
        sides: ["You have no cards in your deck.", "Create Cards"],
        currentSide: 0
      })
    ]);
  }

  _copy() {
    return new NewFlashcardDeck();
  }
}
