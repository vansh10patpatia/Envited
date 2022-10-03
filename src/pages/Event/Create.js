import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateImg from "../../assets/images/create-event.svg";

const Create = () => {

    const navigate = useNavigate();
    const [eventDetails , setEventDetails] = useState({
        eventName: "",
        eventHost: "",
        startDate: "",
        endDate : "",
        location : "",
        image : "",
    })

    const handleCreateEvent = () => {
        navigate("/event", { state: eventDetails });
    }

  return (
    <>
        <div className="create-event-wrapper">
            <div className="create-card">
                <div className="card-text">
                    <h2>Create Your Event</h2>
                    <p>Easily host and share events with your friends across any social media.</p>
                    <div className="input-container">
                        <div className="inputs">
                            {/* <label>Event Name</label> */}
                            <input type={"text"} placeholder={"Event Name"} 
                                onChange={(e)=>{setEventDetails({...eventDetails, eventName: e.target.value})}}  
                            />
                        </div>
                        <div className="inputs">
                            {/* <label>Host Name</label> */}
                            <input type={"text"} placeholder={"Host Name"}
                                onChange={(e)=>{setEventDetails({...eventDetails, eventHost: e.target.value})}}
                            />
                        </div>
                        <div className="start-date">
                            {/* <label>Start Date</label> */}
                            <input type={"date"} placeholder={"Start Date"}
                                onChange={(e)=>{setEventDetails({...eventDetails, startDate: e.target.value})}}
                            />
                        </div>
                        <div className="end-date">
                            {/* <label>End Date</label> */}
                            <input type={"date"} placeholder={"End Date"} 
                                onChange={(e)=>{setEventDetails({...eventDetails, endDate: e.target.value})}}
                            />
                        </div>
                        <div className="inputs">
                            {/* <label>Location</label> */}
                            <input type={"text"} placeholder={"Location"}  
                                onChange={(e)=>{setEventDetails({...eventDetails, location: e.target.value})}}
                            />
                        </div>
                        <input type={"file"} placeholder={"Image"}  
                            accept="image/*"
                            onChange={(e)=>{setEventDetails({...eventDetails, image: URL.createObjectURL(e.target.files[0])})}}
                        />
                    </div>
                    <div className="button-container">
                        <button className="create-event-btn" onClick={handleCreateEvent}>
                             Create 🎉
                        </button>
                    </div>
                </div>
                <div className="card-image">
                    <img src={CreateImg} />
                </div>
            </div>
        </div>
    </>
  )
}

export default Create