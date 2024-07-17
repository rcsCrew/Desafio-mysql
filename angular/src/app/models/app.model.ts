export interface Ingredient {
  id: number;
  name: string;
}

export interface Recipe {
  id: number;
  title: string;
  item: string;
  description: string;
  published: boolean;
  ingredients: Ingredient[];
}
