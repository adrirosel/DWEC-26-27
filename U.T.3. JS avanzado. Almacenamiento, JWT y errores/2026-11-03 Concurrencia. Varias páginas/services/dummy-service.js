import { CategoryModel } from "../models/category.model.js";

export class CategoryDTO {
  #slug;
  #name;
  constructor(slug, name) {
    this.#slug = slug;
    this.#name = name;
  }

  get name() {
    return this.#name;
  }
  get slug() {
    return this.#slug;
  }
}

export class DummyService {
  static BASE_URL = "https://dummyjson.com/products/";

  async getCategories() {
    try {
      const url = DummyService.BASE_URL + "categories";
      const res = await fetch(url);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      const categories = data.map(
        ({ slug, name }) => new CategoryModel(slug, name),
      );
      return categories;
    } catch (error) {
      throw new DummyServiceError(
        "No puedo recuperar las categorías",
        error.message,
        "getCategories",
      );
    }
  }
}

export class DummyServiceError extends Error {
  constructor(message, cause, method) {
    super(`[DummyServiceError ${method}]: ${message}. ${cause} `);
  }
}
