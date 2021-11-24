import React from "react";

function CompanyShow(props) {
  return (
    
      <>
        <div>
          <h1>{ props.companyName }</h1>
        </div>
        <div style={{backgroundColor: 'red', display: "inline-block" }}>
          <img style={{height: '200px', width: '200px' }}src={props.logo} alt={props.companyName} />
        </div>
      </>
    
  );
}

export default CompanyShow;