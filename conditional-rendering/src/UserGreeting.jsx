import PropTypes from 'prop-types';

function UserGreeting(props){

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>

    const stfu =  <h2 className="stfu">Tangina mo :)</h2>

    return (props.isLoggedIn ? welcomeMessage : stfu)
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Nietzsche",
}
export default UserGreeting 