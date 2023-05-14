import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(data) {
    this._popup.querySelector(".popup__img").src = data.link;
    this._popup.querySelector(".popup__photo-title").textContent = data.name;
    this._popup.querySelector(".popup__img").alt = data.name;
    super.open();
  }

}


export default PopupWithImage;
