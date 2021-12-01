import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from "../UserContext";


function Header() {
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext)
    
    return (
            
        <div class='headerDiv'>
            <Link to={'/'}>
                <h1>Home</h1>
            </Link>
                <ul class='headerList'>
                    <li class='headerListItem'>
                        <Link to={'/companies'}>
                            <button class='headerListBtn'>companies</button>
                        </Link>
                    </li>
                    <li class='headerListItem'>
                        <Link to={'/audits'}>
                            <button class='headerListBtn'>audits</button>
                        </Link>
                    </li>
                </ul>
                <ul class='headerList'>
                    <li class='headerListItem'>
                        <Link to={'/register'}>
                            <button class='headerListBtn'>register</button>
                        </Link>
                    </li>
                    <li class='headerListItem'>
                        <Link to={'/login'}>
                            <button class='headerListBtn'>login</button>
                        </Link>
                    </li>
                    <li class='headerListItem'>
                        <button class='headerListBtn' onClick={() => { setUser(); navigate('/')}}>logout</button>
                    </li>
                </ul>
        </div>
    
    );
}

export default Header;