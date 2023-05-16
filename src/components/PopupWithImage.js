import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImg = this._popup.querySelector(".popup__img");
    this._popupImgTitle = this._popup.querySelector(".popup__photo-title");
  }

  open(data) {
    this._popupImg.src = data.link;
    this._popupImgTitle.textContent = data.name;
    this._popupImg.alt = data.name;
    super.open();
  }

}


export default PopupWithImage;
