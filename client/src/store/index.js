import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import authReducer from './auth/reducer'
import carReducer from './cars/reducer'
import locationReducer from './locations/reducer'

// import reducers...
const rootReducer = combineReducers({
  auth: authReducer,
  cars: carReducer,
  locations: locationReducer
})

const middleware = [thunk, logger]

export default createStore(rootReducer, applyMiddleware(...middleware))
