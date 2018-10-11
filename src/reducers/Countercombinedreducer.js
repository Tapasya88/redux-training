import {combineReducers} from 'redux'
import counterReducer from './CounterReducer'

const counterApp = combineReducers({
    counter:counterReducer
    // just counterReducer is also valid
    //counterReducer,counterReducer2,counterReducer3
})

export default counterApp;