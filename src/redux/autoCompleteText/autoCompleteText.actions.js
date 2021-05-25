import {autoCompleteTextActionTypes} from './autoCompleteText.types';
import {fetchUsers} from "../../api/api"

const requestUsersStart= ()=>({
    type: autoCompleteTextActionTypes.REQUEST_USERS_PENDING
})

const requestUsersSuccess = (users)=>({
    type:autoCompleteTextActionTypes.REQUEST_USERS_SUCCESS,
    payload:users
})

const requestUsersFailed = error=>({
    type:autoCompleteTextActionTypes.REQUEST_USERS_FAILED,
    payload:error
})

export const handleChangeText = text=>({
    type:autoCompleteTextActionTypes.HANDLE_CHANGE,
    payload:text
})

export const setUserName = (name)=>({
    type:autoCompleteTextActionTypes.SET_USER_NAME,
    payload:name
})


export const requestUsers= ()=>async(dispatch)=>{
    dispatch(requestUsersStart())
   try{
    const users = await(fetchUsers())
    dispatch(requestUsersSuccess(users))

   }catch(error){
       dispatch(requestUsersFailed(error))
   }
}