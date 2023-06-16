import { ICard } from "./Card";

export interface IMatchFieldData {
  action?: ICard[];
  upgrade?: ICard[];
}

export interface IMatchFieldPayload {
  deck: ICard[];
  discarded: ICard[];
  field: IMatchFieldData;
  hand: ICard[];
}

export enum ECardSource {
  DECK = "deck",
  HAND = "hand",
  ACTION = "action",
  UPGRADE = "upgrade",
  DISCARD = "discard",
}
