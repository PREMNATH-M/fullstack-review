import axios from 'axios';
import {useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';



function Add()
{
    const [id, setId] = useState('');
    const [collegename, setCollegename] = useState("");
    const [city, setCity] = useState("");
    
    
 
    async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/post",
        {
        
       id:id,
        college_name:collegename,
        city:city
        });
          alert(" Added Successfully .");
          setId("");
          setCollegename("");
          setCity("");
          
        
        
        }
    catch(err)
        {
          alert("Adding Failed");
        }
   }
    return (

        <div class="container mt-4"  style={{ display: 'block', 
        width: 700, 
        padding: 30 }}>
          <center><h1>Enter The Details</h1></center>
        <form>
        <div class="form-group">
            <label><span>ID</span></label>
            <input type="text" class="form-control" placeholder="ID"
             value={id}
            onChange={(event) =>
              {
                setId(event.target.value);      
              }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>collegename</span></label>
            <input type="text" class="form-control" placeholder="Enter college name"
             value={collegename}
            onChange={(event) =>
              {
                setCollegename(event.target.value);      
              }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>City</span></label>
            <input type="text" class="form-control" placeholder="Enter city"
             value={city}
             onChange={(event) =>
               {
                setCity(event.target.value);      
               }}
            />
        </div>
        <br></br>
        
        
       <center> <button class="btn btn-primary mt-4"  onClick={save}>Add</button></center>
        </form>

 
      </div>
    
    );
  }
  
  export default Add;