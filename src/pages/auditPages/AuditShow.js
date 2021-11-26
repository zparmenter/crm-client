import React, {useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import AuditModel from '../../models/audit';
import AuditCard from '../../components/AuditCard';

function AuditShow(props) {
    let navigate = useNavigate()
    const {id} = useParams();
    const [audit, setAudit] = useState(null);


    useEffect(function(){
        fetchAudit()
    }, [])


    function fetchAudit() {
        AuditModel.show(id).then((data) => {
            console.log(props)
            setAudit(data.audit);
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
            <AuditCard {...audit} />
        </div>
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