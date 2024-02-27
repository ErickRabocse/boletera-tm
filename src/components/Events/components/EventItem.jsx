const EventItem = ({ image, name, info, id, onClickDetails }) => {
  const handleSeeMoreClick = (e) => {
    e.stopPropagation()
    onClickDetails(id)
  }
  return (
    <div onClick={() => console.log('parent clicked')}>
      <img
        src={image}
        alt={name}
        style={{
          height: '100px',
          width: 'auto'
        }}
      />
      <h4>{name}</h4>
      <p>{info}</p>
      <button
        onClick={handleSeeMoreClick}
        style={{
          backgroundColor: 'yellow',
          color: 'black',
          marginBottom: '20px'
        }}
      >Detalles
      </button>
    </div>
  )
}
export default EventItem
