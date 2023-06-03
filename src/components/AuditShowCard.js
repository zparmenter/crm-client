import React from "react";



function AuditShowCard(props) {
    //console.log(props.company.companyName)

    // console.log(props.company.companyName);
  return (
    
    <>
        <div>
            <h1>{props.companyName}</h1>
        </div>
        <ul>
            <li className='auditShowListItem'>Phone: {props.phoneNumber}</li>
            <li className='auditShowListItem'>Address: {props.address}</li>
            <li className='auditShowListItem'>Website: {props.website}</li>
            <li className='auditShowListItem'>Twitter: {props.twitterUrl}</li>
            <li className='auditShowListItem'>Twitter 2: {props.twitterUrl2}</li>
            <li className='auditShowListItem'>Facebook: {props.facebookUrl}</li>
            <li className='auditShowListItem'>Facebook 2: {props.facebookUrl2}</li>
            <li className='auditShowListItem'>Instagram: {props.instagramUrl}</li>
            <li className='auditShowListItem'>Instagram 2: {props.instagramUrl2}</li>
            <li className='auditShowListItem'>Google: {props.googleUrl}</li>
            <li className='auditShowListItem'>Google 2: {props.googleUrl2}</li>
        </ul>
    </>
  );
}

export default AuditShowCard;