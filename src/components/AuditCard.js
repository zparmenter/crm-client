import React from "react";

function AuditCard(props) {
    
  return (
    
    <>
      <div className='modelListCard'>
        <div>
            <h1>{ props.company.companyName }</h1>
        </div>
        <div>
            <img src={props.company.logo} alt={props.companyName} />
        </div>
      </div>
    </>
    
  );
}

export default AuditCard;