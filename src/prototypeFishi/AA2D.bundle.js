aPlus.AA2D = {};
aPlus.AA2D.Canvas = class {
  constructor(id, width, height) {
    this.element = document.createElement("canvas");
    this.element.id = id;
    this.element.style.width = width;
    this.element.style.height = height;
    document.body.appendChild(this.element);
  }
};
aPlus.AA2D.basicCamera = class {
  constructor(id, options) {
    this.id = id;
    this.options = options;
  }
};
aPlus.AA2D.directCamera = class {
  constructor(id, options) {
    this.id = id;
    this.options = options;
  }
};
aPlus.AA2D.mountedCamera = class {
  constructor(id, options) {
    this.id = id;
    this.options = options;
  }
};
