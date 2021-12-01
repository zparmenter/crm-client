import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthModel from "../../models/auth";
import Header from '../../components/Header';

function UserCreate() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        // send register request and on success redirect to login
        AuthModel.register({ username, email, password }).then((data) => {
          if (data.status === 201) {
            navigate("/login");
          }
        });
    
    }

    return (
        <>
        <Header />
        <div class='authDiv'>
        <h2>Register</h2>
        <form class='authForm' onSubmit={handleSubmit}>
            <div className='form-input authFormDiv'>
            <label htmlFor='username'>Username</label>
            <input
                type='text'
                name='username'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />
            </div>
            <div className='form-input authFormDiv'>
            <label htmlFor='email'>Email</label>
            <input
                type='text'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            </div>
            <div className='form-input authFormDiv'>
            <label htmlFor='password'>Password</label>
            <input
                type='text'
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            </div>

            <div class='authFormDiv'>
                    <input  class='submitBtn' type='submit' value='Register' />
            </div>
        </form>
        </div>
        </>
    );


}

export default UserCreate;

