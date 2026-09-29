const suitSymbols = {
  clubs: "♣",
  diamonds: "♦",
  hearts: "♥",
  spades: "♠"
};

export default function CardButton({
  card,
  isSelected,
  onSelect
}) {
  const suitSymbol = suitSymbols[card.suit];
  const colorClass = card.isRed()
    ? "card--red"
    : "card--black";

  const selectedClass = isSelected
    ? "card--selected"
    : "";

  function handleClick() {
    onSelect(card);
  }

  return (
    <button
      className={`card ${colorClass} ${selectedClass}`}
      type="button"
      onClick={handleClick}
      aria-label={card.label()}
      aria-pressed={isSelected}
    >
      <span className="card__corner card__corner--top">
        <span>{card.rank}</span>
        <span>{suitSymbol}</span>
      </span>

      <span className="card__suit">
        {suitSymbol}
      </span>

      <span className="card__corner card__corner--bottom">
        <span>{card.rank}</span>
        <span>{suitSymbol}</span>
      </span>
    </button>
  );
}