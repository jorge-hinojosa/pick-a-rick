import React from 'react';

export const ProfileContext = React.createContext({
  profiles: [],
});

function ProfilesReducer(state, action) {
  let profiles;

  switch (action.type) {
    case 'ascending':
      profiles = [...state.profiles];
      profiles.sort((profileA, profileB) => (profileA.handle > profileB.handle ? 1 : -1));
      return { profiles };

    case 'descending':
      profiles = [...state.profiles];
      profiles.sort((profileA, profileB) => (profileA.handle < profileB.handle ? 1 : -1));
      return { profiles };

    case 'GET_RICKS':
      profiles = action.payload;
      return { profiles };

    default:
      throw new Error();
  }
}

function ProfilesContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(ProfilesReducer);

  return (
    <ProfileContext.Provider value={{ ...state, dispatch }}>{children}</ProfileContext.Provider>
  );
}

export default ProfilesContextProvider;
