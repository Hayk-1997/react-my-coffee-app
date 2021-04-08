import { gql } from '@apollo/client';

export const GET_RECENT_PRODUCTS = (language) => gql`
    query {
        RecentProductsQuery {
            ${language} {
                title
                types {
                    price
                }
            }
            _id
            mainThumbnail
            slug
        }
    }`;


export const GET_SINGLE_PRODUCT = (language) => gql`
    query SingleProductQuery($slug: String!) {
        SingleProductQuery(slug: $slug) {
            _id
            ${language} {
                title
                description
                types {
                    price
                    label
                    discount
                } 
            }
            mainThumbnail
            slug
        }
    }`;

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
    }
`;
