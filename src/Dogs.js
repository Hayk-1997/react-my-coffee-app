import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_DOGS = gql`
   {
    books {
        title 
    }
  }
`;
const Dogs = () => (
    <Query
        query={GET_DOGS}
    >
        {({loading, error, data}) => {
            console.log(data);
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return (
                <div>
                    <div>
                        sdfsdfsdf
                    </div>
                </div>
            )
        }}
    </Query>
);
export default Dogs;