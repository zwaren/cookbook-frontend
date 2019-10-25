import { RecipeStep } from './recipe-step';

export class Recipe {
    id: number;
    name: string;
    image: string;
    description: string;
    ingredients: string;
    steps: RecipeStep[];
}

