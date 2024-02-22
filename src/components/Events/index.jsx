import EventItem from "./components/EventItem"
// import data from "../../data/events.json"
import eventsJSON from "../../data/events.json"
import { useState } from "react";
// console.log(data);
// const events = data._embedded.events;
// console.log(events);

const Events = () => {
    const [data] = useState(eventsJSON)
    const {_embedded: {events}} = data;
    const eventItems = events.map(eventItem=>(
        <EventItem 
        key={`event-item-${eventItem.id}`}
        image={eventItem.images[0].url}
        name={eventItem.name}
        info={eventItem.info}
        />
    ))
  return (
        <div>Events 
           {eventItems}
        </div>
        
  )
}
export default Events