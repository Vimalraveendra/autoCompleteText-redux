import React from 'react';
import "./autoCompleteText.css"
import { connect } from "react-redux";

import {handleChangeText,setUserName} from '../../redux/autoCompleteText/autoCompleteText.actions'


const AutoCompleteText = ({inputText,changeText,filteredList,renderUsername})=>{
filteredList= filteredList.sort((a,b)=>a.name.localeCompare(b.name));
    return(

        <div className="input-container">
         <input
          type='text'
           value={inputText} 
           placeholder="Name" 
           onChange={changeText} />
           {
             filteredList.length>0?
             <ul>
             {
             filteredList.map(user=>
               <li key={user.id} 
               onClick={()=>renderUsername(user.name)}>
               {user.name}
               </li>
             )}
            </ul>:null
           
           }
          
        </div>
    )
}

const mapStateToProp =({users:{inputText,filteredList}})=>({
  inputText,
  filteredList,
 
})
const mapDispatchToProps =dispatch=>({
  changeText:(e)=>dispatch(handleChangeText(e.target.value)),
  renderUsername:(name)=>dispatch(setUserName(name))
})

export default connect(mapStateToProp,mapDispatchToProps)(AutoCompleteText);