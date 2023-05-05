import React from 'react'

function Card({card, onCardClick}) {
  function handleCardClick() {
    onCardClick(card);
  }

  return(
    <article className="elements__element">
      <img
        className="elements__image"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <div className="elements__description">
        <h2 className="elements__title">{card.name}</h2>
        <div className="elements__favorite-container">
          <button
            type="button"
            className="elements__favorite-disabled button button_opacity_fifty"
            aria-label="Добавить в избранное"
          ></button>
          <span className="elements__favorite-count">{card.likes.length}</span>
        </div>
        <button className="elements__delete-button"></button>
      </div>
    </article>
  );
}

export default Card
