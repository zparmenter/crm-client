import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import CompanyModel from '../../models/company';
import CompanyCard from '../../components/CompanyCard';
import Header from '../../components/Header';


function CompanyShow(props) {
    let navigate = useNavigate()
    const {id} = useParams();
    const [company, setCompany] = useState(null);
    

    useEffect(function(){
        fetchCompany()
    }, [])


    async function fetchCompany() {
        await CompanyModel.show(id).then((data) => {
            setCompany(data.company);
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
            <CompanyCard {...company} />
        </div>
        <div class='companyInfo'>
            Company Name: {JSON.stringify(company, ['companyName'])}<br/>
            Contact: {JSON.stringify(company, ['companyContact'])}<br/>
            Email: {JSON.stringify(company, ['email'])}<br/>
            Phone Number: {JSON.stringify(company, ['phoneNumber'])}<br/>
        </div>
        <div>
            <button class='deleteBtn companyShowBtn' onClick={deleteCompany}>Delete</button>
            <Link to={`/companies/${id}/companyedit`}>
                <button class='editBtn companyShowBtn'>Edit</button>
            </Link><br/>
            <Link to={`createaudit`}>
                <button class='submitBtn companyShowBtn'>Create Audit</button>
            </Link>
        </div>
        </>
    )


}

export default CompanyShow;