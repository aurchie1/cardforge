import { Hand } from "./Hand.js";

export class Player {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.hand = new Hand();
    this.score = 0;
  }

  drawFrom(deck) {
    const card = deck.draw();

    if (card === null) {
      return null;
    }

    this.hand.addCard(card);

    return card;
  }

  addScore(points) {
    this.score += points;
  }
}