import React from "react";

function AuditCard(props) {
    
  return (
    
    <>
      <div className='modelListCard'>
        <div>
            <h1>{ props.company.companyName }</h1>
        </div>
        <div>
            <img style={{height: '200px', width: '200px', borderRadius: '50%' }}src={props.company.logo} alt={props.companyName} />
        </div>
      </div>
    </>
    
  );
}

export default AuditCard;