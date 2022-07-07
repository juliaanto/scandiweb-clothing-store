import { loadCategories, loadProducts } from './action';

import { gql } from '@apollo/client';

export const fetchProductsAction = (currentCategory) =>
  async (dispatch, _getState, client) => {
    try {
      await client
      .query({
        query: gql`
        query GetCategory {
          category (
            input: {title: "${currentCategory}"}
          ) {
            products {
              id
              name
              gallery
              inStock
              brand
              prices { 
                currency {
                  label
                }
                amount
              }
      
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
