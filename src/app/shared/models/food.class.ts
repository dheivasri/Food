export class Food {
  // ? = optional, ! = mandatory
  id!: number;
  name!: string;
  price!: number;
  tags?: string[];
  favorite: boolean = false;
  imageUrl!: string;
  cookTime!: string;
}
