import styles from "./Card.module.scss";
import React from "react";

function Card({ title, imageUrl, price, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState();
  const [isFavorite, setIsFavorite] = React.useState();
  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div className={styles.card}>
      <div onClick={onClickFavorite} className={styles.favorite}>
        <img
          src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
          alt="heart"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
}
export default Card;
