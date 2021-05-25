import React,{useEffect} from 'react'
import './App.css';
import { connect } from "react-redux";

import AutoCompleteText from './components/autoCompleteText/autoCompleteText.component.jsx';
import {requestUsers} from './redux/autoCompleteText/autoCompleteText.actions'



const App=({fetchUsers}) =>{



  useEffect(()=>{
     fetchUsers();
     
   },[fetchUsers])


  return (
    <div className="App">
        <h2>Auto Complete</h2>
        <h4>Start Typing...</h4>
        <div className="input-field">
            <AutoCompleteText/>
            <button>Submit</button>
       </div>
     
    </div>
  );
}

const mapDispatchToProps =dispatch=>({
  fetchUsers:()=>dispatch(requestUsers())
})

export default connect(null,mapDispatchToProps)(App);
