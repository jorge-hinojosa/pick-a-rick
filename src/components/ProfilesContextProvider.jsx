import React from 'react';

export const ProfileContext = React.createContext({
  profiles: [],
});

function ProfilesReducer(state, action) {
  let profiles;

  switch (action.type) {
    case 'ascending':
      profiles = [...state.profiles];
      profiles.sort((profileA, profileB) => (profileA.name > profileB.name ? 1 : -1));
      return { ...state, mutatedProfiles: profiles };

    case 'descending':
      profiles = [...state.profiles];
      profiles.sort((profileA, profileB) => (profileA.name < profileB.name ? 1 : -1));
      return { ...state, mutatedProfiles: profiles };

    case 'GET_RICKS':
      profiles = action.payload;
      return { profiles };

    case 'FILTER_RICKS':
      profiles = state.profiles.filter((profile) => profile.location.name.includes(action.payload));
      return { ...state, mutatedProfiles: profiles };

    case 'RESET_RICKS':
      return { profiles: state.profiles };

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
