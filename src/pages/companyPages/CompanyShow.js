import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import CompanyModel from '../../models/company';
import CompanyCard from '../../components/CompanyCard';
import Header from '../../components/Header';


function CompanyShow(props) {
    let navigate = useNavigate()
    const {id} = useParams();
    const [company, setCompany] = useState({
        companyName: null,
        companyContact: null,
        companyEmail: null,
        companyPhoneNumber: null,
        companyLogo: null,
    });

    useEffect(function(){
        fetchCompany()

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    async function fetchCompany() {
        await CompanyModel.show(id).then((data) => {
            console.log(data.company);
            setCompany({
                companyName: data.company.companyName,
                companyContact: data.company.companyContact,
                companyEmail: data.company.email,
                companyPhoneNumber: data.company.phoneNumber,
                companyLogo: data.company.logo
            });
        });
    }

    // function fetchAudit() {
    //     AuditModel.show(id).then((data) => {
    //         setCompany();
    //     });
    // }

    function deleteCompany() {
        CompanyModel.delete(id).then(data => {
            navigate('/companies')
        })
    }



    return( 
        <>
        <Header />
        <div>
            <CompanyCard 
                companyName={company.companyName} 
                logo={company.companyLogo}
            />
        </div>
        <div className='companyInfo'>
            Company Name: {company.companyName}<br/>
            Contact: {company.companyContact}<br/>
            Email: {company.companyEmail}<br/>
            Phone Number: {company.companyPhoneNumber}<br/>
        </div>
        <div>
            <button className='deleteBtn companyShowBtn' onClick={deleteCompany}>Delete</button>
            <Link to={`/companies/${id}/companyedit`}>
                <button className='editBtn companyShowBtn'>Edit</button>
            </Link><br/>
            <Link to={`createaudit`}>
                <button className='submitBtn companyShowBtn'>Create Audit</button>
            </Link>
        </div>
        </>
    )


}

export default CompanyShow;