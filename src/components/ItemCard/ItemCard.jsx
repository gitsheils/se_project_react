import "./ItemCard.css";
function ItemCard({ item, handleCardClick }) {
  const handleClick = () => {
    handleCardClick(item);
  };
  return (
    <div className="card">
      <h2 className="card__title">{item.name}</h2>
      <img
        className="card__image"
        src={item.link}
        alt={item.name}
        onClick={handleClick}
      ></img>
    </div>
  );
}

export default ItemCard;
