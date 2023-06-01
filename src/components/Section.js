class Section {
  constructor({ items, renderer }, containerSelector, user) {
    this._user = user;
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(cardList) {
    this._items.forEach((item) => {
      this._renderer(item, cardList, this._user);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }

}

export default Section;
