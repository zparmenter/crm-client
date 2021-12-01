import React, { useContext, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import CompanyModel from '../../models/company';
import CompanyCard from '../../components/CompanyCard';
import {UserContext} from '../../UserContext';


function CompanyList(props) {
    const [companies, setCompanies] = useState([]);
    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        fetchCompanies()
    }, []);

    function fetchCompanies() {
        CompanyModel.all().then((data) => {
            setCompanies(data.companies);
        });
    }

    function generateList(companies) {
        return companies.map((company, index) => (
            <Link to={`/companies/${company._id}`} key={index}>
                <CompanyCard {...company} />
            </Link>
        ));
    }



    return(
        <div>
            <Link to={'/audits'}>
                <button>audits</button>
            </Link>
            <h1>Clients</h1>
            <Link to={`/companies/createcompany`}>
                <button>Add Client</button>
            </Link><br/>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>

            # of clients: {companies.length}
            {companies.length ? generateList(companies) : <h2>Loading...</h2>}
            

            {/* {companies.length ? generateList(companies) : <button onClick={fetchCompanies}>Companies List</button>} */}
        </div>
    )


}

export default CompanyList;