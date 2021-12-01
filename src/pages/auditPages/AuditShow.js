import React, { useState, useEffect } from "react";
import { NavLink, useParams } from 'react-router-dom';
import AuditModel from '../../models/audit';
import AuditShowCard from '../../components/AuditShowCard';
import Header from '../../components/Header';




function AuditShow(props) {
    const {id} = useParams();
    const [audit, setAudit] = useState([]);
    const [company, setCompany] = useState(null);
    


    useEffect(function(){
        fetchAudit()
        
    }, [])


    function fetchAudit() {
        AuditModel.show(id).then((data) => {
            
            setAudit(data.audit);
            setCompany(data.audit.company._id)
            
            console.log(data.audit._id)
        });
    }

    /* --------this is here if we want to add delete to this later --------*/
    // function deleteCompany() {
    //     CompanyModel.delete(id).then(data => {
    //         navigate('/companies')
    //     })
    // }



    return( 
        <>
        <Header />
        <div>
            <AuditShowCard {...audit} />
        </div>
        <div class='auditShowBtns'>
            {/* <button onClick={deleteCompany}>Delete</button> */}
            {/* <Link to={`/audits/${id}/companyedit`}> */}
                <button class='editBtn auditBtn'>Edit</button>
            {/* </Link> */}
        <NavLink to={`/companies/${company}` }>
            <button class='submitBtn auditBtn'>
                Client
            </button>
        </NavLink>
        </div>
        </>
    )


}

export default AuditShow;