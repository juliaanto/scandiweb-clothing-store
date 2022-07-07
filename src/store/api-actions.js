import { loadCategories, loadProducts } from './action';

import { gql } from '@apollo/client';

export const fetchProductsAction = () =>
  async (dispatch, _getState, client) => {
    try {
      await client
      .query({
        query: gql`
          query GetCategory {
            category {
              name
              products {
                id
                name
                gallery
                inStock
                brand
              }
            }
          }
        `,
      })
      .then(result => dispatch(loadProducts(result.data.category.products)));
    } catch (error) {
    }
  };


export const fetchCategoriesAction = () =>
  async (dispatch, _getState, client) => {
    try {
      await client
      .query({
        query: gql`
          query GetCategories {
            categories {
              name
            }
          }
        `,
      })
      .then(result => dispatch(loadCategories(result.data.categories)));
    } catch (error) {
  }
};
