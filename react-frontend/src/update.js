import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState} from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Update() {
    const [id, setId] = useState('');
    const [collegename, setCollegename] = useState("");
    const [city, setCity] = useState("");
    
    async function save(event) {
        event.preventDefault();
        try {
            await axios.put("http://localhost:8080/updateDetails",

                { id:id,
                   college_name:collegename,
                    city:city
                    
                });
            alert(" Updated Successfully Completed");
            setId("");
            setCollegename("");
            setCity("");
            


        }
        catch (err) {
            alert(" Updation Failed");
        }
    }

    return (
        <div>
           
           <center ><h2>Update The Details</h2></center>
            <div class="container mt-4"  style={{ display: 'block', 
        width: 500, 
        padding: 30 }}></div>
          
        <form>
        <div class="form-group">
       <center> <input type="number" placeholder='Enter ID Number' className="form-control1" value={id} onChange={(e) => setId(e.target.value)}/></center>
        <br></br>
            <label><span>collegename</span></label>
            <input type="text" class="form-control" placeholder="Enter collegename"
             value={collegename}
            onChange={(event) =>
              {
                setCollegename(event.target.value);      
              }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>city</span></label>
            <input type="text" class="form-control" placeholder="Enter city"
             value={city}
            onChange={(event) =>
              {
                setCity(event.target.value);      
              }}
            />
        </div>
       
        <center>
               <center> <button type="submit" class="btn btn-primary" onClick={save}>Update</button></center>
                </center>
                
            </form>
            

        </div>
    );
}