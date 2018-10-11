//1.create store with reducer and intital state
//2. create reducer
//3. subscribe to store to get updates
//4. dispatch action to see result

/* 
//Level-1----------------------------------------------------//
import {createStore} from 'redux'


const reducer =(state,action)=>{
    if(action.type==="INC"){
        return state+action.payload;
    }
    if(action.type==="DEC"){
        return state-action.payload;
    }
    return state;
}
const store = createStore(reducer,1);

store.subscribe(()=>{
    console.log("Store changed"+ store.getState())
})

store.dispatch({type:'INC',payload:1})
store.dispatch({type:'INC',payload:3})
store.dispatch({type:'DEC',payload:20})
*/


//Level-2----------------------------------------------------//
/*
import {applyMiddleware,createStore} from 'redux'
import logger from 'redux-logger'

const reducer =(state,action)=>{
    if(action.type==="INC"){
        return state+action.payload;
    }
    if(action.type==="DEC"){
        return state-action.payload;
    }
    return state;
}

const middleware= applyMiddleware(logger);
const store = createStore(reducer,1,middleware);

store.subscribe(()=>{
    console.log("Store changed"+ store.getState())
})

store.dispatch({type:'INC',payload:1})
store.dispatch({type:'INC',payload:3})
store.dispatch({type:'DEC',payload:20})
*/

//Level-3----------------------------------------------------//
// Middle ware https://designingforscale.com/understanding-redux-middleware-and-writing-custom-ones/
/*
import {combineReducers,applyMiddleware,createStore} from 'redux'
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'

const userReducer =(state={},action)=>{
    switch(action.type){
        case "change_name":{
            return state={...state,name:action.payload};
        }
        case "change_age":{
            return state={...state,age:action.payload}
        }
    }
    return state;
}

const tweetReducer =(state=[],action)=>{
    return state;
}

const reducers = combineReducers({
    user:userReducer,
    tweets:tweetReducer
})

const store= createStore(reducers,composeWithDevTools(applyMiddleware(logger)));

store.subscribe(()=>{
    console.log("Store changed"+ store.getState())
})

store.dispatch({type:'change_name',payload:'Tapasya'})
store.dispatch({type:'change_age',payload:30})
store.dispatch({type:'change_name',payload:'Venkata'})
*/

//Level-4----------------------------------------------------//
/*
import {applyMiddleware,createStore} from 'redux'
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'
import axios from 'axios'
import {composeWithDevTools} from 'redux-devtools-extension'

const intitalState={
    fetching:false,
    fetched:false,
    user:[],
    error:null
}

const reducer = (state=intitalState,action)=>{
    switch(action.type){
        case "FETCH_USER_START":{
            return {...state,fetching:true}
        }
        case "FETCH_USER_ERROR":{
            return {...state,fetching:false,error:action.paylad}
        }
        case "RECEIVE_USERS":{
            return {...state,fetching:false,fetched:true,user:action.paylad}
        }
    }
    return state;
}

const middleware =applyMiddleware(thunk,logger)

const store = createStore(reducer,composeWithDevTools(middleware));

store.dispatch((dispatch)=>{
    dispatch({type:'FETCH_USER_START'})

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        dispatch({type:'RECEIVE_USERS',payload:response.data})
    })
    .catch((error)=>{
        dispatch({type:"FETCH_USER_ERROR",payload:error})
    })
})
*/

//---Commenting for counter app ---//
/*
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {applyMiddleware,createStore} from 'redux'
import combreducers from './reducers/index'
import App from './component/App'
import {logger} from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'

const middleware =applyMiddleware(logger)
const store = createStore(combreducers,composeWithDevTools(middleware));

ReactDOM.render(
    <Provider store={store}>
    <App/></Provider>,document.getElementById('root')  
)
*/

import React from 'react'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import {createStore} from 'redux'
import combreducers from './reducers/Countercombinedreducer'
import App from './App'

const store = createStore(combreducers)
render(
    <Provider store={store}>
    <App/></Provider>,document.getElementById('root')  
)
