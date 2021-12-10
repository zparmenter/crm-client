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
        <>
        <Header />
        <div className='modelDiv'>
        <h2>New Client</h2>
        <form className='modelForm' onSubmit={handleSubmit}>
            <div className='form-input modelFormDiv'>
            <label htmlFor='companyName'>Company Name</label>
            <input
                type='text'
                name='companyName'
                onChange={(e) => setName(e.target.value)}
                value={companyName}
                className='modelFormInput'
            />
            </div>
            <div className='form-input modelFormDiv'>
            <label htmlFor='companyContact'>Company Contact</label>
            <input
                type='text'
                name='companyContact'
                onChange={(e) => setContact(e.target.value)}
                value={companyContact}
                className='modelFormInput'
            />
            </div>
            <div className='form-input modelFormDiv'>
            <label htmlFor='email'>Email</label>
            <input
                type='text'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className='modelFormInput'
            />
            </div>
            <div className='form-input modelFormDiv'>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input
                type='text'
                name='phoneNumber'
                onChange={(e) => setNumber(e.target.value)}
                value={phoneNumber}
                className='modelFormInput'
            />
            </div>
            <div className='form-input modelFormDiv'>
            <label htmlFor='logo'>Logo</label>
            <input
                type='text'
                name='logo'
                onChange={(e) => setLogo(e.target.value)}
                value={logo}
                className='modelFormInput'
            />
            </div>
            <div className='modelFormDiv'>
                <input className='submitBtn' type='submit' value='Create' />
            </div>
        </form>
        </div>
        </>
    );
}

export default CompanyCreate;