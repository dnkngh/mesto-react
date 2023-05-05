function PopupWithForm({name, title, children, isOpen, onClose}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <form className="popup__form" name={name} noValidate>
          <h2 className="popup__heading">{title}</h2>
          {children}
          <button type="submit" className="popup__save-button button button_opacity_eighty">Сохранить</button>
        </form>
        <button
          type="button"
          className="popup__close-button button button_opacity_sixty"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default PopupWithForm
