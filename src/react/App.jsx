import { useState } from "react";
import { Deck } from "../engine/Deck.js";
import { Player } from "../engine/Player.js";
import CardButton from "./CardButton.jsx";

function createNewHand() {
  const deck = new Deck();
  deck.shuffle();

  const player = new Player(
    "player-richard",
    "Richard"
  );

  for (let count = 0; count < 5; count += 1) {
    player.drawFrom(deck);
  }

  return {
    deck,
    player
  };
}

export default function App() {
  const [game, setGame] = useState(createNewHand);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [message, setMessage] = useState(
    "Choose a card from your hand."
  );

  const { deck, player } = game;
  const selectedCard = player.hand.cards.find((card) => {
    return card.id === selectedCardId;
  });

  function handleSelectCard(card) {
    setSelectedCardId(card.id);
    setMessage(`You selected ${card.label()}.`);
  }

  function handleDealNewHand() {
    setGame(createNewHand());
    setSelectedCardId(null);
    setMessage("A new hand was dealt.");
  }

  return (
    <main className="app">
      <header className="app__header">
        <div>
          <p className="app__eyebrow">React + Electron</p>
          <h1>CardForge</h1>
          <p className="app__message">{message}</p>
        </div>

        <button
          className="action-button"
          type="button"
          onClick={handleDealNewHand}
        >
          Deal new hand
        </button>
      </header>

      <section className="game-board">
        <div className="game-info">
          <div className="stat">
            <span className="stat__label">Player</span>
            <strong>{player.name}</strong>
          </div>

          <div className="stat">
            <span className="stat__label">Cards in deck</span>
            <strong>{deck.count()}</strong>
          </div>

          <div className="stat">
            <span className="stat__label">Cards in hand</span>
            <strong>{player.hand.count()}</strong>
          </div>
        </div>

        <section className="hand-panel">
          <h2>Richard’s hand</h2>

          <div className="hand" aria-label="Richard's hand">
            {player.hand.cards.map((card) => (
              <CardButton
                key={card.id}
                card={card}
                isSelected={card.id === selectedCardId}
                onSelect={handleSelectCard}
              />
            ))}
          </div>
        </section>

        <section className="selection-panel">
          <h2>Selected card</h2>

          {selectedCard ? (
            <p>
              {selectedCard.label()} is{" "}
              {selectedCard.isRed() ? "red" : "black"}.
            </p>
          ) : (
            <p>No card selected.</p>
          )}
        </section>
      </section>
    </main>
  );
}