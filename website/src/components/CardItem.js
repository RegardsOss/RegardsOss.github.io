import React from "react";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__box">
          <div className="cards__item__pic-wrap">
            <img className="cards__item__img" alt="Text img" src={props.src} />
          </div>
          <div className="cards__item__info">
            <h2 className="cards__item__title">{props.title}</h2>
            <div className="cards__item__text">{props.text}</div>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
