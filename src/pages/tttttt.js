const cardList = new Section({ items: initialCards, renderer: renderCard }, ".elements__list");
cardList.renderItems();

function renderCard(item) {
  const card = new Card(item, elementTemplate, (name, link) => {
    picturePopup.open(item)
  });
  const cardElement = card.getCard();
  cardList.addItem(cardElement);
};

function handleFormAddCard(inputValues) {
  const newCard = {
    name: inputValues.title,
    link: inputValues.link
  };

  renderCard(newCard);
  popupAdd.close();
};

class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      const newItem = this._renderer(item);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }

}

export default Section;


