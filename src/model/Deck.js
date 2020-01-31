export type Card = $ReadOnly<{
  contentType: "text",
  front: string,
  back: string
}>;

class Deck {
  _cards: $ReadOnlyArray<Card>;

  constructor(cards: $ReadOnlyArray<Card>) {
    this._cards = cards;
  }

  cards(): $ReadOnlyArray<Card> {
    return this._cards;
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

  cards(): $ReadOnlyArray<Card> {
    return this._cards;
  }
}

export default Deck;
