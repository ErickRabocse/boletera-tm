// eslint-disable-next-line react/prop-types
const EventItem = ({ image, name, info, id, onClickDetails }) => {
  const handleSeeMoreClick = (e) => {
    e.stopPropagation()
    onClickDetails(id)
  }
  return (
    <div onClick={() => console.log('parent clicked')}>
      <img src={image} alt={name} style={{ height: '100px', width: 'auto' }} />
      <h4>{name}</h4>
      <p>{info}</p>
      <button onClick={handleSeeMoreClick}>Detalles
      </button>
    </div>
  )
}
export default EventItem
