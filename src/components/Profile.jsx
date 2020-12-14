import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_RICK } from '../queries';
import { ProfileSkeleton } from './Skeleton';

const Profile = (props) => {
  const { loading, error, data } = useQuery(GET_RICK, {
    // variables: { id: 100000 },
    variables: { id: props.match.params.id },
  });

  if (error) {
    alert('Houston, we have a problem... ');
    return <Redirect to="/" />;
  }

  if (data)
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.cardLeftInfo}>
            <img src={data.character.image} alt={data.character.name} style={styles.image} />
            <h1>{data.character.name}</h1>
          </div>
          <div style={styles.cardRightInfo}>
            <span style={styles.bullet}>
              Species: <p style={styles.bulletText}>{data.character.species}</p>
            </span>
            <span style={styles.bullet}>
              Gender: <p style={styles.bulletText}>{data.character.gender}</p>
            </span>
            <span style={styles.bullet}>
              Location:
              <p style={styles.bulletText}>{data.character.location.name}</p>
            </span>
            <span style={styles.bullet}>
              Status:
              <p style={styles.bulletText}>{data.character.status}</p>
            </span>
            <h2> </h2>
          </div>
        </div>
        <Link to="/">
          <button style={styles.backButton}>Back to Results</button>
        </Link>
      </div>
    );
  else if (loading)
    return (
      <div style={styles.container}>
        <ProfileSkeleton />
      </div>
    );
  else return <Redirect to="/" />;
};

export default Profile;

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
    width: '55%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    alignItems: 'center',
    textAlign: 'center',
  },
  cardRightInfo: {
    width: '45%',
    marginLeft: 0,
    paddingBottom: 50,
  },
  image: {
    maxWidth: 250,
    height: 'auto',
    borderRadius: 8,
  },
  bullet: {
    fontSize: '20px',
    lineHeight: '22px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    padding: '15px 10px',
  },
  bulletText: {
    margin: 0,
    marginLeft: 15,
    padding: 0,
    fontSize: '22px',
  },
  backButton: {
    marginTop: 20,
    background: 'none',
    color: 'blue',
    border: 'none',
    padding: 0,
    font: 'inherit',
    fontWeight: 'bold',
    cursor: 'pointer',
    outline: 'none',
  },
};
