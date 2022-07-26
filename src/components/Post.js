import React, { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export default function Post() {


    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    return (
        <div className="form_container">
            <form className="form_field" >

                <input
                    id="title"
                    className="form_field"
                    type="text"
                    placeholder="Cat care, Dog care,..."
                    name="title"
                />

                <input
                    id="user_id"
                    className="form_field"
                    type="text"
                    placeholder="username"
                    name="user_id"
                />

                <input
                    id="Image"
                    className="form_field"
                    type="text"
                    placeholder=" share an image of our pet"
                    name="Image"
                />

                <DatePicker
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
                    id=""
                    className="form_field"
                    type="text"
                    placeholder=""
                    name=""
                />

                <input
                    id=""
                    className="form_field"
                    type="text"
                    placeholder=""
                    name=""
                />



                <button type="submit">
                    Submit Request
                </button>
            </form>
        </div>
    );
}

