import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthModel from "../../models/auth";



function UserLogin(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
    
        AuthModel.login({ email, password }).then((response) => {
            localStorage.setItem("uid", response.token);
            AuthModel.profile().then((response) => {
                console.log(response);
                navigate('/companies')
            });
        });
    }

    return (
        <div>
        
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div className='form-input'>
            <label htmlFor='email'>Email</label>
            <input
                type='text'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            </div>
            <div className='form-input'>
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
    );


}

export default UserLogin;