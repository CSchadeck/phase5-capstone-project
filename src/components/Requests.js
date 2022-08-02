import React, { useState, useEffect } from "react";
import RequestCard from "./RequestCard";

function Requests({ user, setUser, env }) {

    const [requestData, setRequestData] = useState([]);

    useEffect(() => {
        fetch(`/requests`)
            .then((r) => r.json())
            .then((data) => {
                setRequestData(data);
                console.log(requestData)
            });

        // maintain-login
        // fetch("/me").then((r) => {
        //     if (r.ok) {
        //         r.json().then((user) => setUser(user));
        //     }
        // });
    }, []);

    const renderCard = requestData.map((card) => (
        <RequestCard
            key={card.id}
            props={card}
            env={env}
        />
    ))

    return (
        <>
            <h1>Available Requests</h1>
            {renderCard}
        </>
    );
}

export default Requests;