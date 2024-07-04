import React, {useState} from 'react'

function MyComponent(){

    const [name, setName] = useState("Guest"); // it will be "Name: Guest" before clicking the button
    const [age, setAge] = useState(0);
    const [student, setStudent] = useState();

    const updateName = () => { // when you click the button it will be set to "Socra"
        setName("Socra"); 
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const isStudent = () => {
        setStudent(!student)
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button> 

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Set age</button> 

            <p>Student: {student ? "Yes" : "No"}</p>
            <button onClick={isStudent}>Toggle Status</button> 
        </div>

        
    );
}

export default MyComponent