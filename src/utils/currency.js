import { NameSpace } from '../store/root-reducer';

export const getCurrency = (currencies) => JSON.parse(localStorage.getItem('state'))[NameSpace.ShopData].currentCurrency || currencies[0];