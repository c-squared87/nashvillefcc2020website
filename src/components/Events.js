import React, {useState, useEffect} from "react"
import EventCard from './EventCard'
import EventManager from '../Helpers/EventManager'

const Events = () => {
    //States
    const [events, setEvents] = useState([]);

    //Fetches all the data sets the events
    function fetchData() {
        return EventManager.getAll().then(results => {
            setEvents(results)
        });
    };
    //useEffect calls the data from the fetch
    useEffect(() => {
        fetchData();
    },[]);

    //The return simply maps the events into seperate cards. 
    //More options will be added later.
    return(
        <div className="events-page">
            <h1 className="page-header">Events</h1>
            <div className="events-page__image w-full my-4 h-48 sm:h-64"></div>

            <div className = "card-containers">
                {events.map(event => 
                <EventCard key = {event.id} event = {event}/>
                )}
            </div>
        </div>
    )
}

export default Events