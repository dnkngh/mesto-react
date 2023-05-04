import React from 'react'

import { api } from '../utils/Api'
import Card from './Card'


function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards().then(
      data => {
        setCards(data)
      }
    )
  }, []);

  React.useEffect(() => {
    api.getUserInfo().then(data => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
  }, []);


  return(
    <main className="content">
      <section className="profile">
        <img src={userAvatar} alt="Аватар" className="profile__avatar" />
        <button
          type="button"
          className="profile__avatar-edit-button"
          onClick={onEditAvatar}
        ></button>
        <div className="profile__info">
          <div className="profile__name-wrapper">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__edit-button button button_opacity_sixty"
              title="Редактировать профиль"
              aria-label="Редактировать профиль"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-button button button_opacity_sixty"
          title="Добавить место"
          aria-label="Добавить место"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements">
        <div className="elements__list">
          {cards.map(card => <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
          />)}
        </div>
      </section>
    </main>
  );
};

export default Main
