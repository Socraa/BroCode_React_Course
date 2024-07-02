import PropTypes from 'prop-types'
function Student(props){

    return(
        <div className="student">
            <img src={props.img} alt="picture" />
            <hr />
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes":"No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    Age: PropTypes.number,
    Student: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: true,
}

export default Student


