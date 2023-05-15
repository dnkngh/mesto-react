import React from 'react'

import Footer from './Footer'
import Header from './Header'
import ImagePopup from './ImagePopup'
import Main from './Main'
import PopupWithForm from './PopupWithForm'

import { api } from '../utils/Api'

import { CurrentUserContext } from '../contexts/CurrentUserContext'


function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      setCurrentUser(data);
    });
  }, []);

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then(newCard => {
        setCards(state => state.map(c => c._id === card._id ? newCard : c));
      });
  }

  return (
    <CurrentUserContext.Privider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          handleCardLike={handleCardLike}
        />
        <Footer />
        <PopupWithForm
          name='edit-profile'
          title='Редактировать профиль'
          submitButtonText="Сохранить"
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
          submitButtonText="Создать"
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
          submitButtonText="Сохранить"
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
          submitButtonText="Да"
        >
        </PopupWithForm>

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Privider>
  );
}

export default App
