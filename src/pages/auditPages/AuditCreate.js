import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuditModel from "../../models/audit";
import Header from '../../components/Header';

function AuditCreate() {
    const navigate = useNavigate();
    const [company, setCompany] = useState("");
    const [instagramUrl, setInstagramUrl] = useState("");
    const [instagramUrl2, setInstagramUrl2] = useState("");
    const [facebookUrl, setFacebookUrl] = useState("");
    const [facebookUrl2, setFacebookUrl2] = useState("");
    const [twitterUrl, setTwitterUrl] = useState("");
    const [twitterUrl2, setTwitterUrl2] = useState("");
    const [googleUrl, setGoogleUrl] = useState("");
    const [googleUrl2, setGoogleUrl2] = useState("");
    const [phoneNumber, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [website, setWebsite] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        
        AuditModel.create({ company, instagramUrl, instagramUrl2, facebookUrl, facebookUrl2, twitterUrl, twitterUrl2, googleUrl, googleUrl2, phoneNumber, address, website }).then(
        (data) => {
            navigate("/audits");
        }
        );
    }

    return (
        <>
        <Header />
        <div class='modelDiv'>
        <h2>Audit Form</h2>
        <form class='modelForm' onSubmit={handleSubmit}>
            <div className='form-input modelFormDiv'>
            <label htmlFor='company'>Company</label>
            <input
                type='text'
                name='company'
                onChange={(e) => setCompany(e.target.value)}
                value={company}
                class='modelFormInput'
            />
            </div>
            <div className='form-input modelFormDiv'>
            <label htmlFor='instagramUrl'>Instagram Url</label>
            <input
                type='text'
                name='instagramUrl'
                onChange={(e) => setInstagramUrl(e.target.value)}
                value={instagramUrl}
                class='modelFormInput'
            />
            </div>
            <div className='form-input modelFormDiv'>
            <label htmlFor='instagramUrl2'>Instagram Url2</label>
            <input
                type='text'
                name='instagramUrl2'
                onChange={(e) => setInstagramUrl2(e.target.value)}
                value={instagramUrl2}
                class='modelFormInput'
            />
            </div>
            <div className='form-input modelFormDiv'>
            <label htmlFor='facebookUrl'>Facebook Url</label>
            <input
                type='text'
                name='facebookUrl'
                onChange={(e) => setFacebookUrl(e.target.value)}
                value={facebookUrl}
                class='modelFormInput'
            />
            </div>
            <div className='form-input modelFormDiv'>
            <label htmlFor='facebookUrl2'>Facebook Url2</label>
            <input
                type='text'
                name='facebookUrl2'
                onChange={(e) => setFacebookUrl2(e.target.value)}
                value={facebookUrl2}
                class='modelFormInput'
            />
            </div>
            <div className='form-input modelFormDiv'>
            <label htmlFor='twitterUrl'>Twitter Url</label>
            <input
                type='text'
                name='twitterUrl'
                onChange={(e) => setTwitterUrl(e.target.value)}
                value={twitterUrl}
                class='modelFormInput'
            />
            </div>
            <div className='form-input modelFormDiv'>
            <label htmlFor='twitterUrl2'>Twitter Url2</label>
            <input
                type='text'
                name='twitterUrl2'
                onChange={(e) => setTwitterUrl2(e.target.value)}
                value={twitterUrl2}
                class='modelFormInput'
            />
            </div>
            <div className='form-input modelFormDiv'>
            <label htmlFor='googleUrl'>Google Url</label>
            <input
                type='text'
                name='googleUrl'
                onChange={(e) => setGoogleUrl(e.target.value)}
                value={googleUrl}
                class='modelFormInput'
            />
            </div>
            <div className='form-input modelFormDiv'>
            <label htmlFor='googleUrl'>Google Url2</label>
            <input
                type='text'
                name='googleUrl'
                onChange={(e) => setGoogleUrl2(e.target.value)}
                value={googleUrl2}
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
            <label htmlFor='address'>Address</label>
            <input
                type='text'
                name='address'
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                class='modelFormInput'
            />
            </div>
            <div className='form-input modelFormDiv'>
            <label htmlFor='website'>Website</label>
            <input
                type='text'
                name='website'
                onChange={(e) => setWebsite(e.target.value)}
                value={website}
                class='modelFormInput'
            />
            </div>
            <div class='modelFormDiv'>
                <input class='submitBtn' type='submit' value='Submit' />
            </div>
        </form>
        </div>
        </>
    );
}

export default AuditCreate;