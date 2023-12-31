export interface IStats {
  damage: number;
  cost: number;
  equipment: number;
}

export interface ICardProps {
  selected?: boolean;
  targeted?: boolean;
}

export interface ICard {
  name: string;
  description: string;
  effect: string;
  front?: string;
  season?: string;
  stats: IStats;
  type: string;
  actions: ICardActions;

  // INTERNAL USE ONLY
  _iuid?: string;
  properties?: ICardProps;
}

export enum ECardType {
  ACTION = "action",
  EFFECT = "effect",
  UPGRADE = "upgrade",
}

export interface ICardActions {
  onActivated: ICardAction[];
  onExecuted: ICardAction[];
  onEquipped: ICardAction[];
  onAttacked: ICardAction[];
}

export interface ICardAction {
  name: string;
  filter?: string;
  value: any;
}
