import React from 'react';
import CreateImg from "../../assets/images/create-event.svg";

const Create = () => {
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
                            <input type={"text"} placeholder={"Event Name"}  />
                        </div>
                        <div className="inputs">
                            {/* <label>Host Name</label> */}
                            <input type={"text"} placeholder={"Host Name"}  />
                        </div>
                        <div className="start-date">
                            {/* <label>Start Date</label> */}
                            <input type={"date"} placeholder={"Start Date"}  />
                        </div>
                        <div className="end-date">
                            {/* <label>End Date</label> */}
                            <input type={"date"} placeholder={"End Date"}  />
                        </div>
                        <div className="inputs">
                            {/* <label>Location</label> */}
                            <input type={"text"} placeholder={"Location"}  />
                        </div>
                        <input type={"file"} placeholder={"Image"}  />
                    </div>
                    <div className="button-container">
                        <button className="create-event-btn">
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