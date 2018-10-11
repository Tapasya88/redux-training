import React from 'react';
import Counter from './containers/Counter';
import AddCounter from './containers/Addcounter';
import RemoveCounter from './containers/Removecounter';
import '../src/index.css'

const App = () => {
  return (
    <div className="container">
      <Counter></Counter><br />
      <div className="columns">
        <div className="column is-11">
          <AddCounter></AddCounter>
        </div>
        <div className="column auto">
          <RemoveCounter></RemoveCounter>
        </div>
      </div>
      </div>
  )
}
export default App;
