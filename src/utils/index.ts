import { ICard, IMatchFieldCard } from "../models";

const isIMatchFieldCard = (element: ICard | IMatchFieldCard): boolean => {
  const tmp = element as IMatchFieldCard;
  return tmp.card !== undefined;
};

export { isIMatchFieldCard };
