import React, { useState } from 'react';


function RequestCard({ title, username, image, description, start_date, end_date }) {
   // const { id, title, user_id, image, description, start_date, end_date, accepted } = request;

   


    return (
        <div className="request">
            <h3 className="request_card">{title}</h3>
            <div className="request_card">{image}</div>
            <div className="request_card">{username}</div>
            <div className="request_card">{description}</div>
            <div className="request_card">{start_date}</div>
            <div className="request_card">{end_date}</div>
           <button className="accept_button" onClick={thankYou}>Can you help?🐾</button> 
        </div>
        
    );
}
function thankYou(){
    alert('Thank you for volenteering. The poster will confirm with you via email.')
}

export default RequestCard;