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

export default Deck;
