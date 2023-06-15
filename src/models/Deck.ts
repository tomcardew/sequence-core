import { ICard } from "./Card";

export interface IDeck {
  name: string;
  cards: IDeckCard[];
  createdAt: string;
  updatedAt: string;
}

export interface IDeckCard {
  card: ICard;
  quantity: number;
}
