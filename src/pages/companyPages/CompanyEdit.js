import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CompanyModel from "../../models/company";
import Header from '../../components/Header';


function CompanyEdit() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [companyName, setName] = useState("");
    const [companyContact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setNumber] = useState("");
    const [logo, setLogo] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        
        CompanyModel.update({ companyName, companyContact, email, phoneNumber, logo }, id).then(
        (data) => {
            console.log(id)
            navigate("/companies");
        }
        );
    }

    return (
        <>
        <Header />
        <div class='modelDiv'>
        <h2>Edit Client</h2>
        <form class='modelForm' onSubmit={handleSubmit}>
            <div className='form-input modelFormDiv'>
            <label htmlFor='companyName'>Company Name</label>
            <input
                type='text'
                name='companyName'
                onChange={(e) => setName(e.target.value)}
                value={companyName}
                class='modelFormInput'
            />
            </div>
            <div className='form-input modelFormDiv'>
            <label htmlFor='companyContact'>Company Contact</label>
            <input
                type='text'
                name='companyContact'
                onChange={(e) => setContact(e.target.value)}
                value={companyContact}
                class='modelFormInput'
            />
            </div>
            <div className='form-input modelFormDiv'>
            <label htmlFor='email'>Email</label>
            <input
                type='text'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                class='modelFormInput'
            />
            </div>
            <div className='form-input modelFormDiv'>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input
                type='text'
                name='phoneNumber'
                onChange={(e) => setNumber(e.target.value)}
                value={phoneNumber}
                class='modelFormInput'
            />
            </div>
            <div className='form-input modelFormDiv'>
            <label htmlFor='logo'>Logo</label>
            <input
                type='text'
                name='logo'
                onChange={(e) => setLogo(e.target.value)}
                value={logo}
                class='modelFormInput'
            />
            </div>
            <div class='modelFormDiv'>
                <input class='submitBtn' type='submit' value='Save' />
            </div>
        </form>
        </div>
        </>
    );
}

export default CompanyEdit;