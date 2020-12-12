import React from 'react';
import routes from './routes';
import ProfilesContextProvider from './components/ProfilesContextProvider';
import Header from './components/Header';
import './styles.css';

function App() {
  return (
    <ProfilesContextProvider>
      <Header />
      {routes}
    </ProfilesContextProvider>
  );
}

export default App;
