module.exports = class {
  constructor(initArray) {
    this.storage = [];

    initArray.forEach(this.add);
  }

  get size() {
    return this.storage.length;
  }

  add = (value) => {
    if (!this.has(value)) this.storage.push(value);

    return this;
  }

  clear = () => {
    this.storage = [];
  }

  delete = (val) => {
    const index = this.storage.findIndex((item) => item === val);

    this.storage.splice(index, 1);
  }

  has = (val) => {
    return this.storage.includes(val);
  };

  [Symbol.iterator]() {
    return this.storage.values();
  }

  values = () => {
    return Object.values(this.storage)[Symbol.iterator]();
  }

  keys = this.values;

  entries = () => {
    return this.storage.map((item) => [item, item])[Symbol.iterator]()
  };

  forEach = (cb, thisArg) => {
    this.storage.forEach(cb, thisArg);
  }
}