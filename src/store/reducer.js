import { GET_USERS, SET_USER } from './actions/actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        friends: [...state.friends, ...action.payload],
      };

    case SET_USER:
      const friend = state.friends.find((fr) => fr.id.name === action.payload);
      if (friend) {
        const isSelected = state.selectedFriends.find(
          (fr) => fr.id.name === action.payload
        );

        if (!isSelected) {
          return {
            ...state,
            selectedFriends: [...state.selectedFriends, friend],
          };
        } else {
          return state;
        }
      }
      break;
    default:
      return state;
  }
};

export default reducer;

// const handleAddToList = (id) => {
//   const player = friends.find((fr) => fr.id.name === id);

//   if (player) {
//     const isSelected = selectedFriends.find((pl) => pl.id.name === id);
//     // if usedr is not in the list add it
//     if (!isSelected) {
//       setSelectedFriends((prev) => [...prev, player]);
//     }
//   }
// };
