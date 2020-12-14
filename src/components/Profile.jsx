import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_RICK } from '../queries';

const styles = {
  container: {
    width: '100%',
    minHeight: 'calc(100vh - 68px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
  },
  image: {
    maxWidth: 250,
    height: 'auto',
  },
};

const Profile = (props) => {
  const { loading, error, data } = useQuery(GET_RICK, {
    variables: { id: props.match.params.id },
  });

  if (data)
    return (
      <div style={styles.container}>
        <img src={data.character.image} alt={data.character.name} style={styles.image} />
        <h1>{data.character.name}</h1>
        <h2>Species: {data.character.species}</h2>
        <h2>Gender: {data.character.gender}</h2>
        <h2>Location: {data.character.location.name}</h2>
        <h2>Status: {data.character.status}</h2>
      </div>
    );
  else if (error) return alert('Houston, we have a problem...');
  else if (loading) return <div>Loading</div>;
};

export default Profile;
