import React from "react";

function AuditCard(props) {
    
  return (
    
    <>
        <div>
            <h1>{ props.company.companyName }</h1>
        </div>
        <div style={{backgroundColor: 'red', display: "inline-block", borderRadius: '50%' }}>
            <img style={{height: '200px', width: '200px', borderRadius: '50%' }}src={props.company.logo} alt={props.companyName} />
        </div>
        <ul>
            <li>{props.phoneNumber}</li>
            <li>{props.address}</li>
            <li>{props.website}</li>
        </ul>
    </>
    
  );
}

export default AuditCard;