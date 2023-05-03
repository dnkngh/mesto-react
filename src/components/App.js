import React from 'react'

import Card from './Card'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'


function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isSelectedCard, setSelectedCard] = React.useState();

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  };

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  };

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard();
  };

  return (
    <div className="page">
    <Header />
    <Main
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick}
    />
    <Footer />
    <PopupWithForm
      name='edit-profile'
      title='Редактировать профиль'
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
    >
      <fieldset className="popup__form-data">
        <input
          className='popup__item popup__item_type_name'
          name="username"
          id="username"
          type="text"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__error username-error"></span>
        <input
          className="popup__item popup__item_type_about"
          name="userabout"
          id="userabout"
          type="text"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__error userabout-error"></span>
      </fieldset>
    </PopupWithForm>

    <PopupWithForm
      name="add-place"
      title="Новое место"
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
    >
      <fieldset className="popup__form-data">
        <input
          className="popup__item popup__item_type_place"
          name="name"
          id="placename"
          type="text"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__error placename-error"></span>
        <input
          className="popup__item popup__item_type_image"
          name="link"
          id="placeimage"
          type="url"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error placeimage-error"></span>
      </fieldset>
    </PopupWithForm>

    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
    >
      <fieldset className="popup__form-data">
        <input
          className="popup__item popup__item_type_avatar"
          name="useravatar"
          id="useravatar"
          type="text"
          placeholder="Укажите URL изображения"
          required
        />
        <span className="popup__error useravatar-error"></span>
      </fieldset>
    </PopupWithForm>

    <PopupWithForm
      name="confirm-delete"
      title="Вы уверены?"
    >
    </PopupWithForm>


    {/*<template className="template">*/}
    {/*  <article className="elements__element">*/}
    {/*    <img src="" alt="" className="elements__image" />*/}
    {/*      <div className="elements__description">*/}
    {/*        <h2 className="elements__title"></h2>*/}
    {/*        <div className="elements__favorite-container">*/}
    {/*          <button*/}
    {/*            type="button"*/}
    {/*            className="elements__favorite-disabled button button_opacity_fifty"*/}
    {/*            aria-label="Добавить в избранное"*/}
    {/*          ></button>*/}
    {/*          <span className="elements__favorite-count">0</span>*/}
    {/*        </div>*/}
    {/*        <button className="elements__delete-button"></button>*/}
    {/*      </div>*/}
    {/*  </article>*/}
    {/*</template>*/}

    </div>
  );
}

export default App;
