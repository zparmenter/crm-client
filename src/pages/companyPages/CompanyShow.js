import React, {useContext, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import CompanyModel from '../../models/company';
import CompanyCard from '../../components/CompanyCard';



function CompanyShow() {
    let navigate = useNavigate()
    const {id} = useParams();
    const [company, setCompany] = useState(null);
    
    

    useEffect(function(){
        fetchCompany()
    }, [])


    function fetchCompany() {
        CompanyModel.show(id).then((data) => {
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
        
        <div>
            <CompanyCard {...company} />
        </div>
        <div>
            <button onClick={deleteCompany}>Delete</button>
            <Link to={`/companies/${id}/companyedit`}>
                <button>Edit</button>
            </Link>
            {/* <Link to={`/audits/${value}`}>
                <button>Audit</button>
            </Link> */}
        </div>
        </>
    )


}

export default CompanyShow;