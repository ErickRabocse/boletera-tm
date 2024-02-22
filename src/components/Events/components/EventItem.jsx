// eslint-disable-next-line react/prop-types
const EventItem = ({image, name, info}) => {
  return (
    <div>
        <img src={image} alt={name} style={{height:"100px", width:"auto"}} />
        <h4>{name}</h4>
        <p>{info}</p>
    </div>
  )
}
export default EventItem