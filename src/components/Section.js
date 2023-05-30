class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(cardList) {
    this._items.forEach((item) => {
      this._renderer(item, cardList);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }

}

export default Section;
