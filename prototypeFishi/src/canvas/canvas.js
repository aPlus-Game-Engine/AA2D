//eslint-disable-next-line no-undef
AA2D.Canvas = class {
  constructor(id, width, height) {
    this.element = document.createElement("canvas");
    this.element.id = id;
    this.element.style.width = width;
    this.element.style.height = height;
    document.body.appendChild(this.element);
  }
};
