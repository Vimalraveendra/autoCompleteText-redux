import {combineReducers} from 'redux';
import {requestUsersReducer} from './autoCompleteText/autoCompleteText.reducers'

export default combineReducers({
    users:requestUsersReducer
});