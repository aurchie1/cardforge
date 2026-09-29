export class Card {
  constructor(id, rank, suit, faceUp = true) {
   this.id = id;
   this.rank = rank;
   this.suit = suit;
   this.faceUp = faceUp;
  }

  label(){
    return `${this.rank} of ${this.suit}`;
  }

  isRed() {
    return this.suit === "hearts" || this.suit ==='diamonds';
  }


}