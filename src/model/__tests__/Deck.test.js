import FlashcardDeck, { Flashcard } from "../Deck";

test("advances a double sided card", () => {
  const card = new Flashcard({
    contentType: "text",
    sides: ["a", "b"],
    currentSide: 0
  });

  expect(card.isStartingSide("normal")).toEqual(true);

  expect(card.advance("normal").isStartingSide("normal")).toEqual(false);

  expect(
    card
      .advance("normal")
      .advance("normal")
      .isStartingSide("normal")
  ).toEqual(true);
});
