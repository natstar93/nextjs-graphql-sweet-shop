import { gql, TypedDocumentNode } from '@apollo/client';
import { ResponseProductType, ProductType } from '../types/Product';

export const GET_PRODUCTS = gql`
  query GetProducts {
    allProducts {
        id
        description
        price
        packSize: pack_size
        brand
        colour
        imgUrl: img_url
    }
  }
`;

export const GET_PRODUCT_BY_ID:
TypedDocumentNode<ResponseProductType, ProductType> = gql`
  query GetProduct($id: ID!) {
    Product(id: $id) {
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
