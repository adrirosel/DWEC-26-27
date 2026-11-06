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
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();

      const categories = data.map(
        ({ slug, name }) => new CategoryModel(slug, name),
      );

      const promises = categories.map((category) =>
        this.getCategoryById(category.id),
      );

      const intermediateResult = await Promise.all(promises);
      const categoriesWithImage = intermediateResult.map((result, i) => {
        const category = new CategoryModel(
          categories[i].id,
          categories[i].name,
        );
        category.image = result.products[0].thumbnail;
        return category;
      });
      return categoriesWithImage;
    } catch (error) {
      throw new DummyServiceError(
        "No puedo recuperar las categorías",
        error.message,
        "getCategories",
      );
    }
  }

  async getCategoryById(categoryId) {
    try {
      const url = DummyService.BASE_URL + `/category/${categoryId}`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      throw new DummyServiceError(
        "No puedo recuperar el producto",
        error.message,
        "getCategoryById",
      );
    }
  }

  async getProductById(productId) {
    try {
      const url = DummyService.BASE_URL + productId;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      throw new DummyServiceError(
        "No puedo recuperar el producto",
        error.message,
        "getProductById",
      );
    }
  }
}

export class DummyServiceError extends Error {
  constructor(message, cause, method) {
    super(`[DummyServiceError ${method}]: ${message}. ${cause} `);
  }
}
