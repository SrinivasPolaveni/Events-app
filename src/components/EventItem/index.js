// Write your code here
import './index.css'

const EventItem = props => {
  const {listItems, onChangeStatus} = props
  const {imageUrl, name, location, registrationStatus} = listItems
  const onChange = () => {
    onChangeStatus(registrationStatus)
  }

  return (
    <li className="item">
      <button type="button" className="button" onClick={onChange}>
        <img src={imageUrl} alt="event" className="image" />
      </button>
      <p className="paragraph">{name}</p>
      <p className="paragraph1">{location}</p>
    </li>
  )
}
export default EventItem
