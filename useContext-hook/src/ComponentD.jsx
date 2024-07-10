//This is ComponentD. The Consumer
import React, {useContext} from 'react'; // Step 1: import 
import { userContext } from './ComponentA.jsx'; // Step 2: import this shi

function ComponentD(){

    const user = useContext(userContext);

    return(<div className="box">
        <h1>Component D</h1>
        <h2>{user}</h2>
    </div>);
}

export default ComponentD 