export type SerializedFlashcard = $ReadOnly<{
  contentType: "text",
  sides: $ReadOnlyArray<string>,
  currentSide: number
}>;

class Flashcard {
  constructor(data: SerializedFlashcard) {
    this._data = data;
  }

  advance(): Flashcard {
    const data = { ...this._data };
    data.currentSide = (data.currentSide + 1) % data.sides.length;
    return new Flashcard(data);
  }

  isStartingSide(): boolean {
    return this._data.currentSide === 0;
  }
}

// Don't think of the deck class as simply representing a deck of cards.
// It represents the game rules too. Maybe this would better be called
// "game"?
class FlashcardDeck {
  _cards: $ReadOnlyArray<Flashcard>;
  _cardIndex = 0;

  constructor(cards: $ReadOnlyArray<Flashcard>) {
    this._cards = cards;
  }

  cards(): $ReadOnlyArray<Flashcard> {
    return this._cards;
  }

  advance(): Deck {
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
    return this._card[this._cardIndex];
  }
}

export class NewFlashcardDeck extends FlashcardDeck {
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
    return new NewFlashcardDeck();
  }
}

export default FlashcardDeck;
