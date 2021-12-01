import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from "../UserContext";


function Header() {
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext)
    
    return (
            
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <Link to={'/'}>
                <h1>Home</h1>
            </Link>
                <ul style={{display: 'flex', flexDirection: 'row'}}>
                    <li>
                        <Link to={'/companies'}>
                            <button>companies</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/audits'}>
                            <button>audits</button>
                        </Link>
                    </li>
                </ul>
                <ul style={{display: 'flex', flexDirection: 'row'}}>
                    <li>
                        <Link to={'/register'}>
                            <button>register</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/login'}>
                            <button>login</button>
                        </Link>
                    </li>
                    <li>
                        <button onClick={() => { setUser(); navigate('/')}}>logout</button>
                    </li>
                </ul>
        </div>
    
    );
}

export default Header;