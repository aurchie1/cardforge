export class Hand {
    constructor (){
        this.cards = [];
    }

    addCard(card) {
        this.cards.push(card);
    }

    removeCard(cardId) {
        const cardIndex = this.cards.findIndex((card) => {
            return card.Id === cardId;
        });

        if (cardIndex === -1) {
            return null
        }

        return this.cards.splice(cardIndex, 1)[0];
    }

    count () {
        return this.cards.length;
    }

    hasCard(cardId) {
        return this.cards.some((card) => {
            return card.id === cardId;
        });
    }
}