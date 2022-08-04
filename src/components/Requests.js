import React, { useState, useEffect } from "react";
import RequestCard from "./RequestCard";

function Requests({ user, setUser, env }) {


    const [requestData, setRequestData] = useState([]);

    useEffect(() => {
        fetch(`/requests`)
            .then((r) => r.json())
            .then((data) => {
                setRequestData(data);
                //console.log(requestData)
            });
    }, []);

    function handleUpdatedRequest(updatedRequest) {
        const updatedRequests = requestData.map((request) => request.id === updatedRequest.id ? updatedRequest : request);
        setRequestData(updatedRequests);
    }

    const renderCard = requestData.filter(check => check.user).map((card) => (
        <RequestCard
            key={card.id}
            props={card}
            env={env}
            handleUpdatedRequest={handleUpdatedRequest}
        />
    ))

    return (
        <>
            <h1 className="text-center">Available Requests</h1>
            {renderCard}
        </>
    );
}

export default Requests;