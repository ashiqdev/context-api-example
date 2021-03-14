import { useContext } from 'react';
import { store } from '../store/store';

const Demo = ({ friendLength, children }) => {
  const {
    state: { selectedFriends },
  } = useContext(store);
  return (
    <div>
      <h3>Demo</h3>
      <h3>Added: {selectedFriends.length}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Demo;
