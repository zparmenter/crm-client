import React from "react";



function AuditShowCard(props) {
    // console.log(props.company.companyName)
  return (
    
    <>
        <div>
            <h1>{ props.address }</h1>
        </div>
        <ul>
            <li>Phone: {props.phoneNumber}</li>
            <li>Address: {props.address}</li>
            <li>Website: {props.website}</li>
            <li>Twitter: {props.twitterUrl}</li>
            <li>Facebook: {props.facebookUrl}</li>
            <li>Instagram: {props.instagramUrl}</li>
        </ul>
    </>
  );
}

export default AuditShowCard;