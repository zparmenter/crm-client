import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthModel from "../../models/auth";
import {UserContext} from '../../UserContext';
import Header from '../../components/Header';

function UserLogin(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {user, setUser} = useContext(UserContext);

    function handleSubmit(event) {
        event.preventDefault();
    
        AuthModel.login({ email, password }).then((response) => {
            localStorage.setItem("uid", response.token);
            AuthModel.profile().then((response) => {
                console.log(response);
                setUser(response)
                navigate('/companies')
            });
        });
    }

    return (
        <>
        <Header />
        <div class='loginDiv'>
            <h2>Login</h2>
            <form class='loginForm' onSubmit={handleSubmit}>
                <div className='form-input loginFormDiv'>
                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                </div>
                <div className='form-input loginFormDiv'>
                <label htmlFor='password'>Password</label>
                <input
                    type='text'
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                </div>

                <input type='submit' value='Save!' />
            </form>
        </div>
        </>
    );


}

export default UserLogin;