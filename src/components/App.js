import React from 'react'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'


function App() {
  const [isProfileEditPopupOpen, setProfileEditPopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setProfileEditPopupOpen(true);
  };

  function closePopup() {
    setProfileEditPopupOpen(false);
  };

  return (
    <div className="page">
    <Header />
    <Main onEditProfileClick={handleEditProfileClick} />
    <Footer />
    <PopupWithForm
      name='edit-profile'
      title='Редактировать профиль'
      isOpen={isProfileEditPopupOpen}
      onClose={closePopup}
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

    {/*<div className="popup popup_type_edit-profile">*/}
    {/*  <div className="popup__container">*/}
    {/*    <form className="popup__form" name="profile-form" noValidate>*/}
    {/*      <h2 className="popup__heading">Редактировать профиль</h2>*/}
    {/*      <fieldset className="popup__form-data">*/}
    {/*        <input*/}
    {/*          className="popup__item popup__item_type_name"*/}
    {/*          name="username"*/}
    {/*          id="username"*/}
    {/*          type="text"*/}
    {/*          placeholder="Имя"*/}
    {/*          minLength="2"*/}
    {/*          maxLength="40"*/}
    {/*          required*/}
    {/*        />*/}
    {/*          <span className="popup__error username-error"></span>*/}
    {/*          <input*/}
    {/*            className="popup__item popup__item_type_about"*/}
    {/*            name="userabout"*/}
    {/*            id="userabout"*/}
    {/*            type="text"*/}
    {/*            placeholder="О себе"*/}
    {/*            minLength="2"*/}
    {/*            maxLength="200"*/}
    {/*            required*/}
    {/*          />*/}
    {/*            <span className="popup__error userabout-error"></span>*/}
    {/*      </fieldset>*/}
    {/*      <button type="submit" className="popup__save-button button button_opacity_eighty">Сохранить</button>*/}
    {/*    </form>*/}
    {/*    <button*/}
    {/*      type="button"*/}
    {/*      className="popup__close-button button button_opacity_sixty"*/}
    {/*      aria-label="Закрыть"*/}
    {/*    ></button>*/}
    {/*  </div>*/}
    {/*</div>*/}

    {/*<div className="popup popup_type_add-place">*/}
    {/*  <div className="popup__container">*/}
    {/*    <form className="popup__form" name="card-form" noValidate>*/}
    {/*      <h2 className="popup__heading">Новое место</h2>*/}
    {/*      <fieldset className="popup__form-data">*/}
    {/*        <input*/}
    {/*          className="popup__item popup__item_type_place"*/}
    {/*          name="name"*/}
    {/*          id="placename"*/}
    {/*          type="text"*/}
    {/*          placeholder="Название"*/}
    {/*          minLength="2"*/}
    {/*          maxLength="30"*/}
    {/*          required*/}
    {/*        />*/}
    {/*          <span className="popup__error placename-error"></span>*/}
    {/*          <input*/}
    {/*            className="popup__item popup__item_type_image"*/}
    {/*            name="link"*/}
    {/*            id="placeimage"*/}
    {/*            type="url"*/}
    {/*            placeholder="Ссылка на картинку"*/}
    {/*            required*/}
    {/*          />*/}
    {/*            <span className="popup__error placeimage-error"></span>*/}
    {/*      </fieldset>*/}
    {/*      <button*/}
    {/*        type="submit"*/}
    {/*        className="popup__save-button button button_opacity_eighty"*/}
    {/*      >Создать*/}
    {/*      </button>*/}
    {/*    </form>*/}
    {/*    <button*/}
    {/*      type="button"*/}
    {/*      className="popup__close-button button button_opacity_sixty"*/}
    {/*      aria-label="Закрыть"*/}
    {/*    ></button>*/}
    {/*  </div>*/}
    {/*</div>*/}

    {/*<div className="popup popup_type_image">*/}
    {/*  <div className="popup__image-container">*/}
    {/*    <img className="popup__image" src="../.." alt="" />*/}
    {/*      <h2 className="popup__image-name"></h2>*/}
    {/*      <button*/}
    {/*        type="button"*/}
    {/*        className="popup__close-button button button_opacity_sixty"*/}
    {/*        aria-label="Закрыть"*/}
    {/*      ></button>*/}
    {/*  </div>*/}
    {/*</div>*/}

    {/*<div className="popup popup_type_update-avatar">*/}
    {/*  <div className="popup__container">*/}
    {/*    <form className="popup__form" name="avatar-form" noValidate>*/}
    {/*      <h2 className="popup__heading">Обновить аватар</h2>*/}
    {/*      <fieldset className="popup__form-data">*/}
    {/*        <input*/}
    {/*          className="popup__item popup__item_type_avatar"*/}
    {/*          name="useravatar"*/}
    {/*          id="useravatar"*/}
    {/*          type="url"*/}
    {/*          placeholder="Укажите URL изображения"*/}
    {/*          required*/}
    {/*        />*/}
    {/*          <span className="popup__error useravatar-error"></span>*/}
    {/*      </fieldset>*/}
    {/*      <button*/}
    {/*        type="submit"*/}
    {/*        className="popup__save-button button button_opacity_sixty"*/}
    {/*      >Сохранить*/}
    {/*      </button>*/}
    {/*    </form>*/}
    {/*    <button*/}
    {/*      type="button"*/}
    {/*      className="popup__close-button button button_opacity_sixty"*/}
    {/*      aria-label="Закрыть"*/}
    {/*    ></button>*/}
    {/*  </div>*/}
    {/*</div>*/}

    {/*<div className="popup popup_type_confirm-delete">*/}
    {/*  <div className="popup__container">*/}
    {/*    <form className="popup__form" name="confirm-delete" noValidate>*/}
    {/*      <h2 className="popup__heading">Вы уверены?</h2>*/}
    {/*      <button*/}
    {/*        type="submit"*/}
    {/*        className="popup__save-button button button_opacity_sixty"*/}
    {/*        aria-label="Удалить место"*/}
    {/*      >Да*/}
    {/*      </button>*/}
    {/*    </form>*/}
    {/*    <button*/}
    {/*      type="button"*/}
    {/*      className="popup__close-button button button_opacity_sixty"*/}
    {/*      aria-label="Закрыть"*/}
    {/*    ></button>*/}
    {/*  </div>*/}
    {/*</div>*/}

    <template className="template">
      <article className="elements__element">
        <img src="../.." alt="" className="elements__image" />
          <div className="elements__description">
            <h2 className="elements__title"></h2>
            <div className="elements__favorite-container">
              <button
                type="button"
                className="elements__favorite-disabled button button_opacity_fifty"
                aria-label="Добавить в избранное"
              ></button>
              <span className="elements__favorite-count">0</span>
            </div>
            <button className="elements__delete-button"></button>
          </div>
      </article>
    </template>

    </div>
  );
}

export default App;
