import React from 'react';
import Calendar from "../../assets/images/calendar.svg";
import Location from "../../assets/images/location.svg";
import Cake from "../../assets/images/Cake.svg";
import Arrow from "../../assets/images/arrow.svg";

import { useLocation } from 'react-router-dom';
import moment from 'moment/moment';

const Event = () => {
    const {state} = useLocation();
    console.log(state);
  return (
    <>
        <div className="event-page-container">
            <div className="event-text-cont">
                <div className="text-details">
                    <h2>{state?.eventName ? state?.eventName : 'Birthday Bash'}</h2>
                    <p>Hosted by <b>{state?.eventHost ? state?.eventHost : 'Elysia'}</b></p>
                    <div className="event-details-cont">
                        <div className="event-details">
                            <img src={Calendar} />
                            <div className="sub-info">
                                <p>
                                    <span>{state?.startDate ? moment(state?.startDate).format("LL") :('18 August 6:00PM')}</span><br />
                                    <span className="sub-detail-info">to {state?.endDate ? moment(state?.endDate).format("LL") :(<b>19 August 6:00PM</b>)} UTC +10</span>
                                </p>
                            </div>
                            <div className="arrow-img">
                                <img src={Arrow} />
                            </div>
                        </div>
                        <div className="event-details">
                            <img src={Location} />
                            <div className="sub-info">
                                <p>
                                    <span>Street name</span>
                                    <br />Suburb, State, Postcode
                                </p>
                            </div>
                            <div className="arrow-img">
                                <img src={Arrow} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="event-image-cont">
                <div>
                    <img src={state?.image ? state.image : Cake} />
                </div>
            </div>
        </div>
    </>
)
}

export default Event;