import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export default function Post({ env, user }) {
    console.log('user:', user)
    const [postRequest, setPostRequest] = useState([]);

    //post method
    function submitRequest(e) {
        e.preventDefault();
        const requestItems = {
            start_date: startDate,
            end_date: endDate, title,
            user_id: localStorage.getItem('condoPetID'),
            image, description
        }
        setSent(true);

        fetch(`/requests`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestItems)
        })
            .then((r) => r.json())
            .then((postRequest) => {
                console.log(postRequest)
                setPostRequest(postRequest)
            })
    }



    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [title, setTitle] = useState("")
    const [username, setUsername] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [sent, setSent] = useState(false);

    useEffect(() => {
        setUsername(user.username);
    }, []);

    const postSent = sent ? 'post-sent' : '';

    return (
        <>
            <h1 className="text-center">Post Request</h1>

            <div className={`post_wrapper ${postSent}`}>

                <form id="post-form">

                    <div className='form-block'>
                        <label className="form-label" htmlFor="title">Purpose:</label>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            id="title"
                            className="form-input"
                            type="text"
                            placeholder="Cat care, Dog care,..."
                            name="title"
                        />
                    </div>

                    <div className='form-block'>
                        <label className="form-label" htmlFor="user_id">Member Name</label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            id="user_id"
                            className="form-input"
                            type="text"
                            placeholder="Username"
                            name="user_id"
                        />
                    </div>

                    <div className='form-block'>
                        <label className="form-label" htmlFor="">Pet Image</label>
                        <input
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            id="Image"
                            className="form-input"
                            type="text"
                            placeholder="Place URL here"
                            name="Image"
                        />
                    </div>

                    <div className='form-block'>
                        <label className="form-label" >Start date</label>
                        <DatePicker
                            className="form-input"
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
                        />
                    </div>

                    <div className='form-block'>
                        <label className="form-label" >End date</label>
                        <DatePicker
                            className="form-input"
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
                    </div>

                    <div className='form-block'>
                        <label className="form-label" htmlFor="">Special instructions:</label>
                        <input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            id="description"
                            className="form-input"
                            type="text"
                            placeholder="any specific instructions to share?"
                            name="description"
                        />
                    </div>

                    <div className='form-block'>
                        <button className="button form-button" type="submit" onClick={submitRequest}>
                            Submit Request
                        </button>
                    </div>
                </form>

                <div className="post--thank-you">
                    Your request has been posted.
                </div>
            </div>

        </>
    );
}

