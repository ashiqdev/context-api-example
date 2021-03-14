import { useContext } from 'react';
import { store } from '../store/store';
import Test from './Test';

const Summary = () => {
  const {
    state: { selectedFriends },
  } = useContext(store);
  return (
    <div style={{ background: 'gray', color: 'white' }}>
      <div>
        <h3>Total Added: {selectedFriends.length}</h3>
      </div>

      <div>
        <Test />
      </div>
    </div>
  );
};

export default Summary;
