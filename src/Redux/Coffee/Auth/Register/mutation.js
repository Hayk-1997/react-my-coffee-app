import { gql } from '@apollo/client';

export default gql`
    mutation registration($firstName: String!, $lastName: String!, $password: String!, $confirmPassword: String!, $email: String!, $phoneNumber: String!){
        registration(firstName: $firstName, lastName: $lastName, password: $password, confirmPassword: $confirmPassword, email: $email, phoneNumber: $phoneNumber) {
            token
        }
    }`;
