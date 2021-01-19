import { combineReducers } from 'redux';
import { usersReducer } from './reducers/user.reducer'

export default combineReducers({ user: usersReducer });