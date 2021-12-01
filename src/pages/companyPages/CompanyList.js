import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import CompanyModel from '../../models/company';
import CompanyCard from '../../components/CompanyCard';
import Header from '../../components/Header';

function CompanyList(props) {
    const [companies, setCompanies] = useState([]);


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
        <>
            <Header />
            <h1>Clients</h1>
            <Link to={`/companies/createcompany`}>
                <button class='submitBtn'>Add Client</button>
            </Link><br/><br/>

            # of clients: {companies.length}
            <div class='modelListDiv'>
                {companies.length ? generateList(companies) : <h2>Loading...</h2>}
            </div>
        </>
    )


}

export default CompanyList;