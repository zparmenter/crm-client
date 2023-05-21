import React from "react";

function CompanyCard(props) {
  return (
    
      <>
        <div className='modelListCard'>
          <div>
            <h6>{ props.companyName }</h6>
          </div>
          <div>
            <img src={props.logo} alt={props.companyName} />
          </div>
        </div>
      </>
    
  );
}

export default CompanyCard;