import { useContext } from 'react';
import { store } from '../store/store';

const Header = () => {
  const {
    state: { selectedFriends },
  } = useContext(store);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        background: 'yellowgreen',
      }}
    >
      <p>Friend App</p>
      <p>Added: {selectedFriends.length}</p>
    </div>
  );
};

export default Header;
