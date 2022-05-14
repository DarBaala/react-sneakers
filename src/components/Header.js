import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30 cu-p d-flex" onClick={props.onClickCart}>
          <img width={18} height={18} src="/img/cart.svg" alt="Корзина" />
          <span>{totalPrice} руб.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              className="mr-20"
              width={18}
              height={18}
              src="/img/heart.svg"
              alt="Закладки"
            />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img
              width={18}
              height={18}
              src="/img/user.svg"
              alt="Пользователь"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
