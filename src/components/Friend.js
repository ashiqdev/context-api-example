import { useContext } from 'react';
import { setUserAction } from '../store/actions/actions';
import { SET_USER } from '../store/actions/actionTypes';
import { store } from '../store/store';

const Friend = ({ friend, handleAddToList }) => {
  const { dispatch } = useContext(store);
  return (
    <div style={{ background: 'orangered', color: 'white' }}>
      <p>{friend.name.first}</p>
      <p>{friend.email}</p>
      <p>{friend.phone}</p>
      <button
        onClick={() => dispatch({ type: SET_USER, payload: friend.id.name })}
        // onClick={() => dispatch(setUserAction(friend.id.name))}
      >
        Add
      </button>
    </div>
  );
};

export default Friend;
