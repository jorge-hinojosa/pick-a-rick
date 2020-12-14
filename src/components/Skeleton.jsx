import React from 'react';
import { Media } from 'react-matches';

const MEDIA_QUERIES = {
  sm: {
    maxWidth: 500,
  },
  md: {
    maxWidth: 919,
  },
  lg: {
    minWidth: 920,
  },
};

const styles = {
  backgroundColor: '#F3F4F4',
  backgroundImage: 'linear-gradient(90deg, #F3F4F4, #E2E3E4, #BFC2C3)',
  backgroundSize: '200px 100%',
  backgroundRepeat: 'no-repeat',
  border: '1px solid lightgray',
  display: 'inline-block',
  borderRadius: 8,
  lineHeight: '1px',
  boxShadow: '0 3px 6px lightgray, 0 3px 6px',
  animation: 'skeleton 1.2s ease-in-out infinite',
};

const stylesGrid = {
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    position: 'relative',
    width: '100%',
    maxWidth: 200,
    height: 200,
  },
};

const stylesProfile = {
  card: {
    maxWidth: 820,
    boxSizing: 'border-box',
    marginTop: 15,
  },
};

export const GridSkeleton = () => {
  return (
    <div style={stylesGrid.card}>
      <div style={{ ...styles, ...stylesGrid.avatar }} />
    </div>
  );
};

export const ProfileSkeleton = () => {
  return (
    <Media queries={MEDIA_QUERIES}>
      {({ matches, resolve }) => (
        <div
          style={{
            ...styles,
            ...stylesProfile.card,
            width: matches.sm ? '95%' : '70%',
            height: matches.md ? 625 : 500,
          }}
        ></div>
      )}
    </Media>
  );
};
