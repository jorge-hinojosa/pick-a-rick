import gql from 'graphql-tag';

export const GET_RICKS = gql`
  query {
    characters(page: 2, filter: { name: "rick" }) {
      results {
        id
        name
        status
        species
        gender
        image
        created
      }
    }
  }
`;
