import React from "react";



function AuditShowCard(props) {
    // console.log(props.company.companyName)
  return (
    
    <>
        <div>
            <h1>{ JSON.stringify(props.company, ['companyName'])}</h1>
        </div>
        <ul>
            <li class='auditShowListItem'>Phone: {props.phoneNumber}</li>
            <li class='auditShowListItem'>Address: {props.address}</li>
            <li class='auditShowListItem'>Website: {props.website}</li>
            <li class='auditShowListItem'>Twitter: {props.twitterUrl}</li>
            <li class='auditShowListItem'>Twitter 2: {props.twitterUrl2}</li>
            <li class='auditShowListItem'>Facebook: {props.facebookUrl}</li>
            <li class='auditShowListItem'>Facebook 2: {props.facebookUrl2}</li>
            <li class='auditShowListItem'>Instagram: {props.instagramUrl}</li>
            <li class='auditShowListItem'>Instagram 2: {props.instagramUrl2}</li>
            <li class='auditShowListItem'>Google: {props.googleUrl}</li>
            <li class='auditShowListItem'>Google 2: {props.googleUrl2}</li>
        </ul>
    </>
  );
}

export default AuditShowCard;