import { gql } from '@apollo/client';

export default gql`
    mutation{
        verifyUserToken {
            _id
        }
    }`;
