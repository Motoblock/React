import { ICardCatProps } from './../UI/card/types';

export const CARD_SHOW_TIME = 14000;
export const MAX_PRICE = 1000000;
export const COUNT_SEC = 1000 * 60 * 60 * 24 * 30;
export const DELAY = 1000;

export const SERVER_LINK = 'https://mock-server-cats.vercel.app';

export const MOCK_PROPS: Array<ICardCatProps> = [
  {
    id: 1,
    name: 'Бенедикт',
    breed: 'Абиссинская',
    price: 2000,
  },
];
