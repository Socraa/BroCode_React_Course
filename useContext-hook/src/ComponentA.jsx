// this is ComponentA. The Provider

import ComponentB from "./ComponentB.jsx";
import React, {useState, createContext} from 'react'; // Step 1: import createContext shi

export const userContext = createContext(); // Step 2: export shi

function ComponentA(){

    const [user, setUser] = useState("Socra");

    return(<div className="box">
        <h1>Component A</h1>
        <h2>{user}</h2>
        
        <userContext.Provider value = {user}> {/* Step 3: use Provider to wrap the children*/}
        <ComponentB user={user}/>
        </userContext.Provider>

    </div>);
}

export default ComponentA