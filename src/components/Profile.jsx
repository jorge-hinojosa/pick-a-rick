import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_RICK } from '../queries';
import { ProfileSkeleton } from './Skeleton';

const styles = {
  container: {
    width: '100%',
    minHeight: 'calc(100vh - 68px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
  },
  card: {
    width: '70%',
    maxWidth: 820,
    height: 500,
    boxSizing: 'border-box',
    border: '1px solid lightgray',
    borderTop: '50px solid blue',
    borderRadius: 8,
    boxShadow: '0 3px 6px lightgray, 0 3px 6px',
    padding: '25px 40px',
    marginTop: 15,
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
  },
  cardLeftInfo: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    alignItems: 'center',
    textAlign: 'center',
  },
  cardRightInfo: {
    width: '50%',
    marginLeft: 50,
    paddingBottom: 50,
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
        <div style={styles.card}>
          <div style={styles.cardLeftInfo}>
            <img src={data.character.image} alt={data.character.name} style={styles.image} />
            <h1>{data.character.name}</h1>
          </div>
          <div style={styles.cardRightInfo}>
            <h2>Species: {data.character.species}</h2>
            <h2>Gender: {data.character.gender}</h2>
            <h2>Location: {data.character.location.name}</h2>
            <h2>Status: {data.character.status}</h2>
          </div>
        </div>
      </div>
    );
  else if (error) return alert('Houston, we have a problem...');
  else if (loading)
    return (
      <div style={styles.container}>
        <ProfileSkeleton />
      </div>
    );
};

export default Profile;
