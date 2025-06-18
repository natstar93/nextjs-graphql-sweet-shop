import { gql, TypedDocumentNode } from '@apollo/client';
// import { ResponseProductType, ProductType } from '../types/Product';

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
        id
        name
        description
        price
        packSize: pack_size
        brand
        colour
        imgUrl: img_url
    }
  }
`;

export const GET_PRODUCT_BY_ID: TypedDocumentNode = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
        id
        name
        description
        price
        packSize: pack_size
        brand
        colour
        imgUrl: img_url
    }
  }
`;
