import React from "react";

function CompanyCard(props) {
  return (
    
      <>
        <div>
          <h1>{ props.companyName }</h1>
        </div>
        <div style={{backgroundColor: 'red', display: "inline-block", borderRadius: '50%' }}>
          <img style={{height: '200px', width: '200px', borderRadius: '50%' }}src={props.logo} alt={props.companyName} />
        </div>
      </>
    
  );
}

export default CompanyCard;