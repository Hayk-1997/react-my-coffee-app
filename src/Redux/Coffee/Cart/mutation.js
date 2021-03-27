import { gql } from '@apollo/client';

export const GET_CART = (language) => gql`
    query CartQuery($user: String!) {
        CartQuery(user: $user) {
            _id
            quantity
            product {
                price
                ${language} {
                    title
                }
                mainThumbnail
            }
        }
    }`;