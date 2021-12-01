import React, { useState, useEffect } from "react";
import { NavLink, useParams } from 'react-router-dom';
import AuditModel from '../../models/audit';
import AuditShowCard from '../../components/AuditShowCard';





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
        
        <div>
            <AuditShowCard {...audit} />
        </div>
        <NavLink to={`/companies/${company}` }>
            <button>
                Client
            </button>
        </NavLink>
        <div>
            {/* <button onClick={deleteCompany}>Delete</button> */}
            {/* <Link to={`/audits/${id}/companyedit`}> */}
                <button>Edit</button>
            {/* </Link> */}
        </div>
        </>
    )


}

export default AuditShow;