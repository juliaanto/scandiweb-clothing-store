import { NameSpace } from '../store/root-reducer';

export const getCategory = (categories) => JSON.parse(localStorage.getItem('state'))[NameSpace.ShopData].currentCategory || categories[0].name;