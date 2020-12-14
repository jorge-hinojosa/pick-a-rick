import React from 'react';

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
  },
};

const stylesProfile = {
  card: {
    width: '100%',
    maxWidth: 820,
    height: 500,
    boxSizing: 'border-box',
    marginTop: 15,
    backgroundColor: '#F3F4F4',
    backgroundImage: 'linear-gradient(90deg, #F3F4F4, #E2E3E4, #BFC2C3)',
    backgroundSize: '200px 100%',
    backgroundRepeat: 'no-repeat',
    border: '1px solid lightgray',
    borderRadius: 8,
    display: 'inline-block',
    lineHeight: '1px',
    boxShadow: '0 3px 6px lightgray, 0 3px 6px',
    animation: 'skeleton 1.2s ease-in-out infinite',
  },
};

export const GridSkeleton = () => {
  return (
    <div style={stylesGrid.card}>
      <div style={stylesGrid.avatar} />
    </div>
  );
};

export const ProfileSkeleton = () => {
  return <div style={stylesProfile.card}></div>;
};
