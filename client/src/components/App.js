import React, { useState } from 'react';
import Count from './Count';
import IncrementBtn from './buttons/IncrementBtn';
import ResetBtn from './buttons/ResetBtn';

function App() {

  const [count, setCount] = useState(0);
  
  return (
    <div className='ui container'>
      <Count value={count}/>
      <IncrementBtn onClick={() => setCount(count + 1)}/>
      <ResetBtn onClick={() => setCount(0)}/>
    </div>
  );
}

export default App;
