import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanyModel from "../../models/company";
import Header from '../../components/Header';


function CompanyCreate() {
    const navigate = useNavigate();
    const [companyName, setName] = useState("");
    const [companyContact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setNumber] = useState("");
    const [logo, setLogo] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        
        CompanyModel.create({ companyName, companyContact, email, phoneNumber, logo }).then(
        (data) => {
            navigate("/companies");
        }
        );
    }

    return (
        <div>
        <Header />
        <h2>New Client</h2>
        <form onSubmit={handleSubmit}>
            <div className='form-input'>
            <label htmlFor='companyName'>Company Name</label>
            <input
                type='text'
                name='companyName'
                onChange={(e) => setName(e.target.value)}
                value={companyName}
            />
            </div>
            <div className='form-input'>
            <label htmlFor='companyContact'>Company Contact</label>
            <input
                type='text'
                name='companyContact'
                onChange={(e) => setContact(e.target.value)}
                value={companyContact}
            />
            </div>
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
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input
                type='text'
                name='phoneNumber'
                onChange={(e) => setNumber(e.target.value)}
                value={phoneNumber}
            />
            </div>
            <div className='form-input'>
            <label htmlFor='logo'>Logo</label>
            <input
                type='text'
                name='logo'
                onChange={(e) => setLogo(e.target.value)}
                value={logo}
            />
            </div>

            <input type='submit' value='Save!' />
        </form>
        </div>
    );
}

export default CompanyCreate;