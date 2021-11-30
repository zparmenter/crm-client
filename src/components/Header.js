import React from "react";

import { Link } from "react-router-dom";

import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms";

const Header = () => {
  const [user, setUser] = useRecoilState(userState);

  function login() {
    const dbUser = {
      username: "Test user",
      avatar:
        "https://gamespot1.cbsistatic.com/uploads/scale_landscape/1587/15875866/3660435-avatar.jpg",
    };
    setUser(dbUser);
  }

  // logout function will simply set the user back to null
  function logout() {
    setUser(null);
  }

    return (
        <header>
        <div className='logo'>
            <Link to={"/"}>Home</Link>
        </div>
        <div className='links'>
            <ul>
            {user ? (
                <>
                <li>
                    <Link to={"/companies"}>
                        <button>Clients</button>
                    </Link>
                </li>
                // logout element to set the user back to null on click
                <li className='btn' onClick={logout}>
                    <button>Log Out</button>
                </li>
                </>
            ) : (
                <li className='btn' onClick={login}>
                    <button>Login</button>
                </li>
            )}
            </ul>
        </div>
        </header>
    );
};

export default Header;