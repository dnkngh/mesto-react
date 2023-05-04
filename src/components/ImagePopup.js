function ImagePopup(props) {
  return(
    <div
      className={`popup popup_type_image ${props.card ? 'popup_opened' : ''}`}
      onClick={props.onClose}
    >
      <div className="popup__image-container">
        <img
          className="popup__image"
          src={props.card ? props.card.link : ''}
          alt={props.card ? props.card.name : ''}
        />
        <h2 className="popup__image-name">{props.card ? props.card.name : ''}</h2>
        <button
          type="button"
          className="popup__close-button button button_opacity_sixty"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
};

export default ImagePopup
