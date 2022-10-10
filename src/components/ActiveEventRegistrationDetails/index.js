// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {checkedStatus} = props

  const StatusConstants = {
    success: 'REGISTERED',
    failure: 'REGISTRATIONS_CLOSED',
    inProgress: 'YET_TO_REGISTER',
  }

  switch (checkedStatus) {
    case StatusConstants.success:
      return (
        <div className="status-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            className="image1"
          />
          <h1 className="heading2">
            You have already registered for the event
          </h1>
        </div>
      )
    case StatusConstants.failure:
      return (
        <div className="status-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
            alt="registrations closed"
            className="image1"
          />
          <h1 className="heading2">Registrations Are Closed Now!</h1>
          <p className="paragraph3">Stay tuned. We will reopen</p>
        </div>
      )
    case StatusConstants.inProgress:
      return (
        <div className="status-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
            className="image1"
          />
          <p className="paragraph3">
            A live performance brings so much to your relationship with dance
          </p>
          <button type="button" className="button1">
            Register here
          </button>
        </div>
      )
    default:
      return (
        <div>
          <p className="paragraph3">
            Click on an event, to view its registration details
          </p>
        </div>
      )
  }
}
export default ActiveEventRegistrationDetails
