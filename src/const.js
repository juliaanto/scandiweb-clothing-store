export const AppRoute = {
  Main: '/',
  Product: '/product/:id',
}

export const AppLink = {
  ProductById: ((id) => `/product/${id}`),
}