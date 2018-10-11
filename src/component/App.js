import React from 'react'
import TrainerList from '../containers/Trainer-list'
import TrainerDetails from '../containers/Trainer-details';
import '../index.css'

const App = ()=>(
    <div>
        <h2>Trainer list</h2>
        <TrainerList/>
         <h2>Trainer details</h2>
         <TrainerDetails/>
    </div>
)
export default App;
