import React from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router"

// A simple component that shows the pathname of the current location
class ShowTheLocation extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }


  constructor(props){
    super(props)

    // this.state = {
    //   location : this.props.location
    // }
  }

  render() {
    const { match, location, history, getLocation } = this.props
    //getLocation(location.pathname)
    return <div>You are now at {location.pathname}</div>
  }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
const ShowTheLocationWithRouter = withRouter(ShowTheLocation)

export default ShowTheLocationWithRouter;