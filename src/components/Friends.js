import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Friend from './Friend';
import Summary from './Summary';
import { store } from '../store/store';
import { getUsersAction } from '../store/actions/actions';

const Friends = () => {
  const { state, dispatch } = useContext(store);
  const { friends } = state;
  // const [friends, setFriends] = useState([]);
  // const [selectedFriends, setSelectedFriends] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const url = 'https://randomuser.me/api/?results=15';
      const res = await axios.get(url);
      // console.log(res.data.results);
      // dispatch({ type: 'GET_USERS', payload: res.data.results });
      dispatch(getUsersAction(res.data.results));
    };

    loadData();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div>
        {friends.length > 0 &&
          friends.map((friend) => <Friend friend={friend} />)}
      </div>

      <div>
        <Summary />
      </div>
    </div>
  );
};

export default Friends;
