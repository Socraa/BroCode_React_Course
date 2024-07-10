import React, {useContext} from 'react'; // Step 1: import 
import { userContext } from './ComponentA.jsx'; // Step 2: import this shi
import ComponentD from './ComponentD.jsx';
function ComponentC(){

    const user = useContext(userContext);

    return(<div className="box">
        <h1>Component C</h1>
        <h2>{`sup bitch ass ${user}`}</h2>
        <ComponentD/>
    </div>);
}

export default ComponentC