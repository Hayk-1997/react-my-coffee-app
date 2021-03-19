import { gql } from '@apollo/client';

export default gql`
    mutation login($password: String!, $email: String!) {
        login(password: $password, email: $email) {
            token
        }
    }`;