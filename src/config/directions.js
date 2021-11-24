import React from 'react';
import { Routes, Route } from 'react-router-dom';


import CompanyEdit from '../pages/companyPages/CompanyEdit';
import CompanyCreate from '../pages/companyPages/CompanyCreate';
import CompanyList from '../pages/companyPages/CompanyList';
import CompanyShow from '../pages/companyPages/CompanyShow';
import Home from '../pages/Home';

export default function Directions() {
    return(
        <Routes>
            <Route exact path='/' element={ Home } />
            <Route exact path='/companies/' element={ <CompanyList  /> } />
            <Route exact path='/companies/:id' element={ <CompanyShow /> } />
            <Route exact path='/companies/:id/companyedit' element={ <CompanyEdit /> } />
            <Route exact path='/companies/createcompany' element={ <CompanyCreate />} />
        </Routes>
    )
}