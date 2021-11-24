import React from 'react';
import { Routes, Route } from 'react-router-dom';


import CompanyEdit from '../pages/CompanyEdit';
import CompanyCreate from '../pages/CompanyCreate';
import CompanyList from '../pages/CompanyList';
import CompanyShow from '../pages/CompanyShow';
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