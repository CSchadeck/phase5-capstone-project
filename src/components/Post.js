import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export default function Post({postRequest, setPostRequest,requestData}) {


//post method
    function submitRequest (e){
        e.preventDefault()
        const requestItems = {start_date:startDate, end_date:endDate, title, user_id:5, image, description}
        fetch('https://obscure-headland-31666.herokuapp.com/requests', {
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(requestItems)
        })
        .then((r) => r.json())
        .then((postRequest) => {
            console.log(postRequest)
            setPostRequest(postRequest)})
    }



    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [title, setTitle]= useState("")
    const [username, setUsername] = useState("")
    const [image, setImage]= useState("")
    const [description, setDescription]= useState("")
    const [accepted_by, setAcceptedBy] = useState("")
    const [accepted, setAccepted] = useState(true)


    return (
        <div className="form_container">
            <form className="form_field" >

                <input
                value={title}
                onChange= {(e)=> setTitle(e.target.value)}
                    id="title"
                    className="form_field"
                    type="text"
                    placeholder="Cat care, Dog care,..."
                    name="title"
                />

                <input
                value={username}
                onChange= {(e)=> setUsername(e.target.value)}
                    id="user_id"
                    className="form_field"
                    type="text"
                    placeholder="username"
                    name="user_id"
                />

                <input
                value={image}
                onChange= {(e)=> setImage(e.target.value)}
                    id="Image"
                    className="form_field"
                    type="text"
                    placeholder=" share an image of our pet"
                    name="Image"
                />

                <DatePicker
                value={startDate}
                    placeholderText="Select Start Date"
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mmaa"
                    selected={startDate}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
                    onChange={date => setStartDate(date)}
                    placeholder=" share an image of our pet"
                />
                <DatePicker
                value={endDate}
                    placeholderText="Select End Date"
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mmaa"
                    selected={endDate}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    onChange={date => setEndDate(date)}

                />

                <input
                value={description}
                onChange= {(e)=> setDescription(e.target.value)}
                    id="description"
                    className="form_field"
                    type="text"
                    placeholder="any specific instructions to share?"
                    name="description"
                />
   <input
                 value={accepted}
                 onChange= {(e)=> setAccepted(e.target.value)}
                    id="description"
                    className="form_field"
                    type="text"
                    placeholder="pending"
                    name="accepted"
                />
                <input
                 value={accepted_by}
                 onChange= {(e)=> setAcceptedBy(e.target.value)}
                    id="description"
                    className="form_field"
                    type="text"
                    placeholder="pending"
                    name="accepted_by"
                />
                <button type="submit" onClick={submitRequest}>
                    Submit Request
                </button>
            </form>
        </div>
    );
}

