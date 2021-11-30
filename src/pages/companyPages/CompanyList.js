import React, {useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import CompanyModel from '../../models/company';
import CompanyCard from '../../components/CompanyCard';



function CompanyList(props) {
    const [companies, setCompanies] = useState([]);

    useEffect(
        function () {
            console.log('useeffect was called');
            fetchCompanies();
        }, []
    );

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
            
            <h1>Clients</h1>
            <Link to={`/companies/createcompany`}>
                <button>Add Client</button>
            </Link><br/>

            # of clients: {companies.length}
            {companies.length ? generateList(companies) : <h2>Loading...</h2>}
            

            {/* {companies.length ? generateList(companies) : <button onClick={fetchCompanies}>Companies List</button>} */}
        </div>
    )


}

export default CompanyList;