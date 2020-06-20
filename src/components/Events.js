import React, {useState, useEffect} from "react"
import EventCard from './EventCard'
import EventManager from '../Helpers/EventManager'
import PageTitle from './PageTitle'
import NavMenu from './NavMenu'

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
        <div>
            <NavMenu />
            <PageTitle title="Events" />
            <div className = "card-containers">
                {events.map(event => 
                <EventCard key = {event.id} event = {event}/>
                )}
            </div>
        </div>
    )
}

export default Events