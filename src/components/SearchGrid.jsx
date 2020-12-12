import React, { useContext, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import SearchCard from './SearchCard';
import { ProfileContext } from './ProfilesContextProvider';
import { useQuery } from '@apollo/react-hooks';
import { GET_RICKS } from '../queries';
import Skeleton from './Skeleton';

const SearchGrid = () => {
  const res = useQuery(GET_RICKS);
  const c = useContext(ProfileContext);
  console.log(c);

  useEffect(() => {
    if (res && !c.profiles) {
      c.dispatch({ type: 'GET_RICKS', payload: res?.data?.characters?.results });
    }
  }, [res, c.profiles]);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridGap: '16px',
      }}
    >
      {c.profiles ? (
        c.profiles.map((profile) => (
          <Link
            to={`/profile/${profile.id}`}
            style={{
              textDecoration: 'none',
              color: '#FFF',
            }}
            className="rick-card"
          >
            <SearchCard
              key={profile.id}
              photoUrl={profile.image}
              handle={profile.name}
              location={profile.location?.name}
              // age={profile.age}
              // photoCount={profile.photoCount}
            />
          </Link>
        ))
      ) : (
        <Fragment>
          {Array.from({ length: 20 }, (_, i) => (
            <Skeleton key={i} />
          ))}
        </Fragment>
      )}
    </div>
  );
};

export default SearchGrid;
