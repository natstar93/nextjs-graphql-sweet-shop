import { ApolloError } from '@apollo/client';
import apolloClient from './apollo-client';
import { GET_PRODUCT_BY_ID } from './queries';
import { ProductType } from '../types/Product';

async function getProduct(id: string) {
  try {
    const { data } = await apolloClient.query<{product: ProductType}>({
      query: GET_PRODUCT_BY_ID,
      variables: { id },
    });

    if (!data.product) {
      return {
        props: {
          product: null,
          error: 'Sorry, we\'re having trouble loading this product right now',
        },
      };
    }

    return {
      props: {
        product: data.product,
        error: null,
      },
    };
  } catch (error) {
    if (error instanceof ApolloError) {
      // some kind of telemetry
      return { props: { product: null, error: 'Oh F*ck, something went wrong!' } };
    }

    return {
      props: {
        product: null,
        error,
      },
    };
  }
}

export default getProduct;
