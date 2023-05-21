import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from "../UserContext";

function Header() {
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext)
    
    return (
            
        
        <>
        {user ? (
            <div className='headerDiv'>
                <Link to={'/'}>
                    <h2>Home</h2>
                </Link>
                <ul className='headerList'>
                    <li className='headerListItem'>
                        <Link to={'/companies'}>
                            <button className='headerListBtn'>companies</button>
                        </Link>
                    </li>
                    <li className='headerListItem'>
                        <Link to={'/audits'}>
                            <button className='headerListBtn'>audits</button>
                        </Link>
                    </li>
                    <li className='headerListItem'>
                        <button className='headerListBtn' onClick={() => { setUser(); navigate('/')}}>logout</button>
                    </li>
                </ul>
        </div>
        ) : 
            
        (
        <div className='headerDiv'>
            <Link to={'/'}>
                <h2>Home</h2>
            </Link>
            <ul className='headerList'>
                <li className='headerListItem'>
                    <Link to={'/register'}>
                        <button className='headerListBtn'>register</button>
                    </Link>
                </li>
                <li className='headerListItem'>
                    <Link to={'/login'}>
                        <button className='headerListBtn'>login</button>
                    </Link>
                </li>
                <li className='headerListItem'>
                    <button className='headerListBtn' onClick={() => { setUser(); navigate('/')}}>logout</button>
                </li>
            </ul>
        </div>)}
        </>
    );
}

export default Header;