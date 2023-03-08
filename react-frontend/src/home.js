import React from 'react'
import { Link } from 'react-router-dom';
import "./home.css";
function Home() {
  return (
    <> 
    <body>
        <div class="home">
            <div className='navi'>
                <ul className="navigation">
                    <li><Link to="/" className='nav'>Home</Link></li>
                    <li><Link to="/Menu" className='nav'>Admission</Link></li>
                    <li><Link to="/" className='nav'>About</Link></li>
                    <li><Link to="/" className='nav'>Contact</Link></li>
                </ul>
            </div>
           
            
        </div>

    </body></>
  )
}

export default Home;