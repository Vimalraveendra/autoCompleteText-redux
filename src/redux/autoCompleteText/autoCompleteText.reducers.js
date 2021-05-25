import {autoCompleteTextActionTypes} from './autoCompleteText.types'
import {addMatchedUsers} from './autoCompleteText.utils'

const INITIAL_STATE={
    usersList:[],
    filteredList:[],
    searchText:'',
    isPending:false,
    error:"",
    inputText:""
}

export const requestUsersReducer=(state=INITIAL_STATE,action={})=>{
    switch(action.type){
     case autoCompleteTextActionTypes.REQUEST_USERS_PENDING:
         return{
             ...state,
             isPending:true,
         }

         case autoCompleteTextActionTypes.REQUEST_USERS_SUCCESS:
             return{
                 ...state,
                 isPending:false,
                 usersList:action.payload
             }

             case autoCompleteTextActionTypes.REQUEST_USERS_FAILED:
                return{
                    ...state,
                    isPending:false,
                    error:action.payload
                }
            case autoCompleteTextActionTypes.HANDLE_CHANGE:
                return{
                    ...state,
                    inputText:action.payload,
                    filteredList:addMatchedUsers(
                        state.filteredList,
                        state.usersList,
                        action.payload,

                    ),
                    
                }
            case autoCompleteTextActionTypes.SET_USER_NAME:
                return{
                    ...state,
                    inputText:action.payload,
                    filteredList:[]
                }
         default:
             return state;
    }
}