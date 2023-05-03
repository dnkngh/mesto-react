function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <form className="popup__form" name={props.name} noValidate>
          <h2 className="popup__heading">{props.title}</h2>
          {props.children}
          <button type="submit" className="popup__save-button button button_opacity_eighty">Сохранить</button>
        </form>
        <button
          type="button"
          className="popup__close-button button button_opacity_sixty"
          aria-label="Закрыть"
        ></button>
      </div>
    </div>
  )
}

export default PopupWithForm
