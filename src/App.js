import React,{useState,useEffect} from 'react'
import './App.css';


import AutoCompleteText from './components/autoCompleteText/autoCompleteText.component.jsx';
import {fetchUsers} from './api/api'

function App() {
  const [usersList,setUsersList] = useState([]);
  const [filteredList,setFilteredList] = useState([]);
  const [inputText,setInputText] = useState("");

 
  const changeText =(event)=>{
    let newUsersList=filteredList;
   let value = event.target.value;
    if(value.length>0){
     newUsersList= usersList.filter(user=>user.name.toLowerCase().includes(value.toLowerCase()))
    }else{
      newUsersList=[];
    }
    setInputText(value)
    setFilteredList(newUsersList)
  
    
  }

const renderUsername =(name)=>{
  setInputText(name)
  setFilteredList([])
}


  

  useEffect(()=>{
    const fetchedUsers = async()=>{
    setUsersList(await fetchUsers())
    
    } 
    fetchedUsers();
   },[])


  return (
    <div className="App">
     <h2>Auto Complete</h2>
     <h4>Start Typing...</h4>
     <div className="input-credentials">
     <AutoCompleteText
      inputText={inputText} 
      changeText={changeText} 
      users={filteredList}
      renderUsername={renderUsername} 
      />
     <button>Submit</button>
     </div>
     
    </div>
  );
}

export default App;
