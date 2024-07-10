import React, {useState, useEffect, useRef} from 'react';


function MyComponent(){

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() =>{
        console.log("BITCH!!");

    });

    function handleClick(){
        inputRef1.current.focus(); // 'current' refers to the input element, 'focus()' will place the cursor in that element
        inputRef1.current.style.backgroundColor = "Yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";

    }

    function handleClick2(){
        inputRef2.current.focus(); 
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "Yellow";
        inputRef3.current.style.backgroundColor = "";

    }

    function handleClick3(){
        inputRef3.current.focus(); 
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "Yellow";

    }

    return(<>
        <div>
            <button onClick={handleClick}>Click me 1</button>
            <input ref={inputRef1}/>  {/*ref is a built in attribute for useRef. it makes the input the inputRef which is also the inputRef.current*/}  

            <button onClick={handleClick2}>Click me 2</button>
            <input ref={inputRef2}/>

            <button onClick={handleClick3}>Click me 3</button>
            <input ref={inputRef3}/>        
        </div>

    </>);
}

export default MyComponent

