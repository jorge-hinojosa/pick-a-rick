import React, { useContext, useEffect, Fragment } from 'react';
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
          <SearchCard
            key={profile.id}
            photoUrl={profile.image}
            handle={profile.name}
            location={profile.location}
            // age={profile.age}
            // photoCount={profile.photoCount}
          />
        ))
      ) : (
        <Fragment>
          {Array.from({ length: 20 }, (_, i) => (
            <Skeleton />
          ))}
        </Fragment>
      )}
    </div>
  );
};

export default SearchGrid;
