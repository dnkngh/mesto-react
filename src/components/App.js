import React from 'react'

import AddPlacePopup from './AddPlacePopup'
import ConfirmDeletePopup from './ConfirmDeletePopup'
import EditAvatarPopup from './EditAvatarPopup'
import EditProfilePopup from './EditProfilePopup'
import Footer from './Footer'
import Header from './Header'
import ImagePopup from './ImagePopup'
import Main from './Main'

import { api } from '../utils/Api'

import { CurrentUserContext } from '../contexts/CurrentUserContext'


function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmDeletePopupOpen, setConfirmDeletePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [cardId, setCardId] = React.useState('');

  React.useEffect(() => {
    api.getInitialCards().then(data => {
      setCards(data);
    }).catch(error => console.log(error));
  }, []);

  React.useEffect(() => {
    api.getUserInfo().then(userData => {
      setCurrentUser(userData);
    }).catch(error => console.log(error));
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

  function handleCardDeleteClick(card) {
    setCardId(card._id);
    setConfirmDeletePopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setConfirmDeletePopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then(newCard => {
      setCards((state) => state.map(c => c._id === card._id ? newCard : c));
    }).catch(error => console.log(error));
  }

  function handleCardDelete() {
    api.deleteCard(cardId).then(() => {
      setCards(cards.filter(item => item._id !== cardId));
    }).catch(error => console.log(error));

    closeAllPopups();
  }

  function handleUpdateUser(inputValues) {
    api.setUserInfo(inputValues).then((userdata) => {
      setCurrentUser(userdata);

      closeAllPopups();
    }).catch(error => console.log(error));
  }

  function handleUpdateAvatar(inputValues) {
    api.setUserAvatar(inputValues).then((userdata) => {
      setCurrentUser(userdata);

      closeAllPopups();
    }).catch(error => console.log(error));
  }

  function handleAddPlaceSubmit(invputValues) {
    api.addCard(invputValues).then(cardData => {
      setCards([cardData, ...cards]);

      closeAllPopups();
    }).catch(error => console.log(error));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDeleteClick={handleCardDeleteClick}
          cards={cards}
        />
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <ConfirmDeletePopup
          isOpen={isConfirmDeletePopupOpen}
          onClose={closeAllPopups}
          onConfirm={handleCardDelete}
        >
        </ConfirmDeletePopup>

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App
