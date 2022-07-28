import React, { useState, useEffect } from "react";
import RequestCard from "./RequestCard";


function Requests({requestData}) {

    // const [requestData, setRequestData] = useState([]);
    
    // useEffect(() => {
    //     fetch("https://obscure-headland-31666.herokuapp.com/requests")
    //     .then((r) => r.json())
    //     .then((data) => {
    //         setRequestData(data);
    //         console.log(requestData)
    //     })
    // }, []);
    // console.log(requestData)        
    
    const renderCard = requestData.map((i) => (
        <RequestCard
            key={i.id}
            title={i.title}
            image={i.image}
            username={i.user.username}
            description={i.description}
            start_date={i.start_date}
            end_date={i.end_date}
        />
    ))
    // const  {title, user_id, description, start_date, end_date} = requestData


    return (
        <div>
            {renderCard}
        </div>
    );
}


export default Requests;