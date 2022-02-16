import React from 'react';
import {Link} from 'react-router-dom';


function Nav() {
  
  return (
    <div>
        <nav >
            <h3>Logo</h3>
            <ul className="nav-Links">
              <Link to='/Business'>
              <li>Business</li>
              </Link>
              <Link to='/MedicalInstitute'>
              <li>MedicalInstitute</li>
              </Link>
              <Link to='/User'>
              <li>User</li>
              </Link>
              
            </ul>
           
          </nav>
    </div>
  )
}

export default Nav;