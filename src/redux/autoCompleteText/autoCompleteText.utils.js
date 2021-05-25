export const addMatchedUsers =(filteredList,usersList,inputText)=>{
    let newUsersList=filteredList;
     if(inputText.length>0){
      newUsersList= usersList.filter(user=>user.name.toLowerCase().includes(inputText.toLowerCase()))
     }else{
       newUsersList=[];
     }
  return newUsersList;
}