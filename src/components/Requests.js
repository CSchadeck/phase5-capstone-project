import RequestCard from "./RequestCard";
import React, { useEffect, useState } from "react";

export default function Requests() {
    const [] = useState("All")

    const [requests, setRequests] = useState([])

    useEffect(() => {
        fetch("https://obscure-headland-31666.herokuapp.com/requests")
            .then((r) => r.json())
            .then((requests) => console.log(requests));
    }, []);


}