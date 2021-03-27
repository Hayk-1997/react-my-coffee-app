import { gql } from '@apollo/client';

export const ADD_TO_CART = gql`
    mutation addToCart($user: String!, $product: String!, $quantity: Int!, $type: String!){
        addToCart(user: $user, product: $product, quantity: $quantity, type: $type) {
            _id
        }
    }
`;