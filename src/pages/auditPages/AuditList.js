import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import AuditModel from '../../models/audit';
import AuditCard from '../../components/AuditCard';


function AuditList(props) {
    const [audits, setAudits] = useState([]);
    

    useEffect(
        function () {
            console.log('useeffect was called');
            fetchAudits();
        }, []
    );

    function fetchAudits() {
        AuditModel.all().then((data) => {
            setAudits(data.audits);
        });
    }

    function generateList(audits) {
        return audits.map((audit, index) => (
            <NavLink to={`/audits/${audit._id}`} key={index}>
                <AuditCard {...audit} />
            </NavLink>
            // setValue(`${audit._id}`)
            
        ));
    }



    return(
        <div>
            <h1>Audits List</h1>

            # of audits: {audits.length}
            {audits.length ? generateList(audits) : <h2>Loading...</h2>}
            

            {/* {companies.length ? generateList(companies) : <button onClick={fetchCompanies}>Companies List</button>} */}
        </div>
    )


}

export default AuditList;