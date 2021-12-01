import React, { useContext, useState, useEffect } from "react";
import { NavLink, Link } from 'react-router-dom';
import AuditModel from '../../models/audit';
import AuditCard from '../../components/AuditCard';
import {UserContext} from '../../UserContext';

function AuditList(props) {
    const [audits, setAudits] = useState([]);
    const {user, setUser} = useContext(UserContext);

    

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
            <Link to={'/companies'}>
                <button>companies</button>
            </Link>
            <h1>Audits List</h1><br/>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
            <br/>
            <button onClick={() => setUser()}>change value</button>
            # of audits: {audits.length}
            {audits.length ? generateList(audits) : <h2>Loading...</h2>}
            

            {/* {companies.length ? generateList(companies) : <button onClick={fetchCompanies}>Companies List</button>} */}
        </div>
    )


}

export default AuditList;