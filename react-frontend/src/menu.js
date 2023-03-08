import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css"
import "./menu.css"

function Menu() {
  return (
    <>
        <body>
            <div class="home">
                <div className='navi'>
                    <ul class="navigation">
                        <li><Link to="/" className='nav'>Home</Link></li>
                        <li><Link to="/Menu" className='nav'>Admission</Link></li>
                        <li><Link to="/" className='nav'>About</Link></li>
                        <li><Link to="/" className='nav'>Contact</Link></li>
                    </ul>
                </div>
                <h2>Admission</h2>
                <div class="change">
                    <button class="edit" onClick={()=>{document.getElementById("option").style.display="block"}}>Edit Admission</button>
                    <div id="option">
                        <ul>
                            <li><Link to="/Add" className='options'>Add</Link></li>
                            <li><Link to="/Update" className='options'>Update</Link></li>
                            <li><Link to="/Delete" className='options'>Delete</Link></li>
                            <li><Link to="/show" className='options'>Show</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </body>
    </>
  )
}

export default Menu