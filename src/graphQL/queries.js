import { gql } from '@apollo/client';


export const GET_RECENT_PRODUCTS = (language) => gql`
    query {
        RecentProductsQuery {
            ${language} {
                title
            }
            _id
            price
            mainThumbnail
            slug
        }
    }`;


export const GET_SINGLE_PRODUCT = (language) => gql`
    query SingleProductQuery($slug: String!) {
        SingleProductQuery(slug: $slug) {
            _id
            price
            ${language} {
              title
              description
            }
            mainThumbnail
        }
    }`;