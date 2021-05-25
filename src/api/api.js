import axios from 'axios';


export const fetchUsers = async()=>{
    try{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    const data = await response;
     return data.data       

    
   
   } catch(error){
    console.log(error)
   }
}
