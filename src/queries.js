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
        location {
          name
        }
      }
    }
  }
`;

export const GET_RICK = gql`
  query($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      image
      location {
        name
      }
    }
  }
`;
