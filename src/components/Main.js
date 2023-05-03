import React from 'react'

import { api } from './Api'


function Main({handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick}) {
  const [username, setUsername] = React.useState('123')
  const [userabout, setUserabout] = React.useState()
  const [useravatar, setUseravatar] = React.useState()

  React.useEffect(() => {
    api.getUserInfo().then(data => {
      setUsername(data.name);
      setUserabout(data.about);
      setUseravatar(data.avatar);
    })
  }, []);


  return(
    <main className="content">
      <section className="profile">
        <img src="../index.js" alt="Аватар" className="profile__avatar" />
        <button
          type="button"
          className="profile__avatar-edit-button"
          onClick={handleEditAvatarClick}
        ></button>
        <div className="profile__info">
          <div className="profile__name-wrapper">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button
              type="button"
              className="profile__edit-button button button_opacity_sixty"
              title="Редактировать профиль"
              aria-label="Редактировать профиль"
              onClick={handleEditProfileClick}
            ></button>
          </div>
          <p className="profile__about">Исследователь океана</p>
        </div>
        <button
          type="button"
          className="profile__add-button button button_opacity_sixty"
          title="Добавить место"
          aria-label="Добавить место"
          onClick={handleAddPlaceClick}
        ></button>
      </section>

      <section className="elements">
        <div className="elements__list">
        </div>
      </section>
    </main>
  )
}

export default Main