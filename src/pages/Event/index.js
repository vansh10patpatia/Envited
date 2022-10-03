import React from "react";
import Calendar from "../../assets/images/calendar.svg";
import Location from "../../assets/images/location.svg";
import Cake from "../../assets/images/Cake.svg";
import Arrow from "../../assets/images/arrow.svg";

import { useLocation } from "react-router-dom";
import moment from "moment/moment";

const Event = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      
      <div className="event-page-container-wrap">
        <div className="event-page-container-details">
          <h1>Birthday Bash</h1>
          <p>Hosted by Elysia</p>
          <div className="event-page-container-details-card">
            <div className="event-page-container-details-card-img">
              <img src={Calendar} />
            </div>
            <div className="event-page-container-details-card-text">
              <h1>{state?.startDate ? moment(state?.startDate).format("LL") :('18 August 6:00PM')}</h1>
              <p>to {state?.endDate ? moment(state?.endDate).format("LL") :(<b>19 August 6:00PM</b>)} UTC +10</p>
            </div>
            <div className="event-page-container-details-card-arrow">
              <img src={Arrow} alt="" />
            </div>
          </div>
          <div className="event-page-container-details-card">
            <div className="event-page-container-details-card-img">
              <img src={Location} />
            </div>
            <div className="event-page-container-details-card-text">
              <h1>Street name</h1>
              <p>{state?.location ? state?.location : 'Suburb, State, Postcode'}</p>
            </div>
            <div className="event-page-container-details-card-arrow">
              <img src={Arrow} alt="" />
            </div>
          </div>
        </div>
        <div className="event-page-container-img">
          <img src={state?.image ? state.image : Cake} alt="" />
        </div>
      </div>
    </>
  );
};

export default Event;
