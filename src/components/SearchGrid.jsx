import React, { useContext, useEffect, Fragment } from 'react';
import { Media } from 'react-matches';
import { useQuery } from '@apollo/react-hooks';
import { GET_RICKS } from '../queries';
import { ProfileContext } from './ProfilesContextProvider';
import { GridSkeleton } from './Skeleton';
import SearchCard from './SearchCard';

const MEDIA_QUERIES = {
  xs: {
    maxWidth: 400,
  },
  sm: {
    minWidth: 401,
  },
  md: {
    minWidth: 700,
  },
  lg: {
    minWidth: 920,
  },
  xl: {
    minWidth: 1200,
  },
};

const SearchGrid = () => {
  const res = useQuery(GET_RICKS);
  const c = useContext(ProfileContext);

  useEffect(() => {
    if (res && !c.profiles) {
      c.dispatch({ type: 'GET_RICKS', payload: res?.data?.characters?.results });
    }
  }, [res, c.profiles]);

  return (
    <Media queries={MEDIA_QUERIES}>
      {({ resolve }) => (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: resolve({
              xs: '1fr',
              sm: '1fr 1fr',
              md: '1fr 1fr 1fr',
              lg: '1fr 1fr 1fr 1fr',
              xl: '1fr 1fr 1fr 1fr 1fr',
            }),
            gridGap: '16px',
          }}
        >
          {c.profiles ? (
            c.profiles.map((profile) => (
              <SearchCard
                key={profile.id}
                id={profile.id}
                photoUrl={profile.image}
                handle={profile.name}
                location={profile.location?.name}
              />
            ))
          ) : (
            <Fragment>
              {Array.from({ length: 20 }, (_, i) => (
                <GridSkeleton key={i} />
              ))}
            </Fragment>
          )}
        </div>
      )}
    </Media>
  );
};

export default SearchGrid;
