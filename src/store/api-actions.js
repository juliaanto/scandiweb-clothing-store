import { gql } from '@apollo/client';
import { loadProducts } from './action';

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
