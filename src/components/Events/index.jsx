import EventItem from './components/EventItem'
// import data from "../../data/events.json"
import eventsJSON from '../../data/events.json'
import { useState } from 'react'
// const events = data._embedded.events;

const Events = ({ searchTerm }) => {
  const [data] = useState(eventsJSON)
  const { _embedded: { events } } = data
  const handleClickDetails = (id) => {
    console.log(`Event with id: ${id}`)
  }
  const renderEvents = () => {
    let eventsFiltered = events
    if (searchTerm.length > 0) {
      eventsFiltered = eventsFiltered.filter(item => item.name.toLocaleLowerCase().includes(searchTerm))
    }
    return eventsFiltered.map(eventItem => (
      <EventItem
        key={`event-item-${eventItem.id}`}
        image={eventItem.images[0].url}
        name={eventItem.name}
        info={eventItem.info}
        id={eventItem.id}
        onClickDetails={handleClickDetails}
      />
    ))
  }

  return (
    <div>Events
      {renderEvents()}
    </div>

  )
}
export default Events
