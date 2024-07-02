// Props = read-only properties that are shared between compenents.
//         A parent component can send data to a child component.
//         <Component key=value />

import Student from "./Student.jsx";
import profileNietzsche from './assets/nietzsc.png'
import profileSocra from './assets/socra.png'


function App() {

  return(
    <>
    <Student name="Socra" age = {30} isStudent = {false} img ={profileSocra} ></Student>
    <Student name="Nietzsche" age = {55} isStudent = {true} img={profileNietzsche}></Student>
    <Student></Student>
    </>
  );
  
}

export default App
