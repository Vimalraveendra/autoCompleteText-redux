import {autoCompleteTextActionTypes} from './autoCompleteText.types'

const INITIAL_STATE={
    usersList:[],
    searchText:'',
    isPending:false,
    error:"",
    text:""
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
                    text:action.payload
                }
         default:
             return state;
    }
}