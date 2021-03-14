import { useContext } from 'react';
import { store } from '../store/store';
import Another from './Another';
import Demo from './Demo';

const Test = () => {
  return (
    <div style={{ background: 'royalblue', color: 'white' }}>
      <Demo>
        <Another />
      </Demo>
    </div>
  );
};

export default Test;
