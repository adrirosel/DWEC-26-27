export class CategoryModel {
  #id;
  #name;
  #image;
  constructor(id, name) {
    this.#id = id;
    this.#name = name;
  }

  get id() {
    return this.#id;
  }
  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  set image(value) {
    this.#image = value;
  }

  get image() {
    return this.#image;
  }
}
