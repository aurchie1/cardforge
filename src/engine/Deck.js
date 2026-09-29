import { Card } from "./Card.js";

export class Deck {
  constructor() {
    this.cards = this.createStandardDeck();
  }

  createStandardDeck() {
    const suits = [
      "clubs",
      "diamonds",
      "hearts",
      "spades"
    ];

    const ranks = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    const cards = [];

    for (const suit of suits) {
      for (const rank of ranks) {
        const id = `${rank}-${suit}`;

        cards.push(new Card(id, rank, suit));
      }
    }

    return cards;
  }

  shuffle() {
    for (let index = this.cards.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(
        Math.random() * (index + 1)
      );

      const cardAtCurrentIndex = this.cards[index];

      this.cards[index] = this.cards[randomIndex];
      this.cards[randomIndex] = cardAtCurrentIndex;
    }
  }

  draw() {
    if (this.cards.length === 0) {
      return null;
    }

    return this.cards.pop();
  }

  count() {
    return this.cards.length;
  }
}