import React, { useState, useEffect } from "react";
import { NavLink, useParams } from 'react-router-dom';
import AuditModel from '../../models/audit';
import AuditShowCard from '../../components/AuditShowCard';
import Header from '../../components/Header';




function AuditShow(props) {
    const {id} = useParams();
    const [audit, setAudit] = useState([]);
    const [company, setCompany] = useState({});
    


    useEffect(function(){
        fetchAudit()

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function fetchAudit() {
        try {
            await AuditModel.show(id).then((data) => {
                setAudit(data.audit);
                setCompany(data.audit.company);
            });
        } catch (err) {
            console.error(err);
        }
    }


    

    /* --------this is here if we want to add delete to this later --------*/
    // function deleteAudit() {
    //     AuditModel.delete(id).then(data => {
    //         navigate('/audits')
    //     })
    // }



    return( 
        <>
        <Header />
        <div>
            <AuditShowCard {...audit} {...company}/>
        </div>
        <div className='auditShowBtns'>
            {/* <Link to={`/audits/${id}/companyedit`}> */}
                <button className='editBtn auditBtn'>Edit</button>
            {/* </Link> */}
        <NavLink to={`/companies/${company._id}` }>
            <button className='submitBtn auditBtn'>
                Client
            </button>
        </NavLink>
        </div>
        </>
    )


}

export default AuditShow;