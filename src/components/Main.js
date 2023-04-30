function Main() {
  return(
    <main className="content">
      <section className="profile">
        <img src="../index.js" alt="Аватар" className="profile__avatar" />
        <button type="button" className="profile__avatar-edit-button"></button>
        <div className="profile__info">
          <div className="profile__name-wrapper">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button
              type="button"
              className="profile__edit-button button button_opacity_sixty"
              title="Редактировать профиль"
              aria-label="Редактировать профиль"
            ></button>
          </div>
          <p className="profile__about">Исследователь океана</p>
        </div>
        <button
          type="button"
          className="profile__add-button button button_opacity_sixty"
          title="Добавить место"
          aria-label="Добавить место"
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