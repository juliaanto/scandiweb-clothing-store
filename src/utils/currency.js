export const getCurrency = (currencies) => {
  if(!currencies || currencies.length < 1) {
    return;
  }
  
  if(localStorage.getItem('currency') !== null && localStorage.getItem('currency') !== 'undefined') {
    return JSON.parse(localStorage.getItem('currency'));
  } else {
    window.localStorage.setItem('currency', JSON.stringify(currencies[0]));
    return currencies[0];
  }
}