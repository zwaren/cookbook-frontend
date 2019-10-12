import { Ingredient } from './ingredient';
import { RecipeStep } from './recipe-step';

export class Recipe {
    id: number;
    name: string;
    image: string;
    description: string;
    ingredients: [Ingredient, number][];
    steps: RecipeStep[];
}

