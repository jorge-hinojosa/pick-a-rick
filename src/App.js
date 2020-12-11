import React from 'react';
import SearchPage from './components/SearchPage';
import ProfilesContextProvider from './components/ProfilesContextProvider';
import './styles.css';

import { useQuery } from '@apollo/react-hooks';
import { GET_RICKS } from './queries';

function App() {
  const res = useQuery(GET_RICKS);
  console.log(res);

  return (
    <ProfilesContextProvider>
      <SearchPage />
    </ProfilesContextProvider>
  );
}

export default App;
