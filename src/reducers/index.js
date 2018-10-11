import {combineReducers} from 'redux'
import CommentsRecucer from './comments'

const rootReducer = combineReducers({
    cooments:CommentsRecucer
})

export default rootReducer;