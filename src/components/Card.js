import React from "react"

function Card(card) {
  function handleClick() {
    card.onCardClick(card.card);
  }

  return (
    <li className="element">
      <button type="button" className="element__delete-button" aria-label="Кнопка удаления карточки"></button>
      <img src={card.link} className="element__photo" alt={card.name} onClick={handleClick}/>
      <div className="element__description-wrapper">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-wrapper">
          <button type="button" id="like" className="element__like-button" aria-label="Кнопка Ставлю лайк!"></button>
          <p className="element__like-counter">{card.likes}</p>
        </div>
      </div>
    </li>
  )
}

export default Card