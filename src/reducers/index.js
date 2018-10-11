import {combineReducers} from 'redux'
import ActiveTrainerReducer from './reeducer-active-trainer'
import TrainerReducer from './reducer-trainers'

const combreducers = combineReducers({
    trainers:TrainerReducer,
    activetrainer:ActiveTrainerReducer
})

export default combreducers;