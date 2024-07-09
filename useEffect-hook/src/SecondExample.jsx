import React, {useState, useEffect} from 'react';

function SecondExample(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);


    useEffect(() =>{
        window.addEventListener('resize', handleWindowSize);
        console.log("PUTANGINA MO");

        return () => { // acts as a cleaner 
            window.removeEventListener('resize', handleWindowSize);
        }

    },[])// if there is [] in the dependency, it will only run once

    useEffect(()=>{
        document.title = `size: ${width} x ${height}`;
    }, [width, height]); // if this dependencies is change/update then the useEffect will work

    function handleWindowSize(){

        setWidth(window.innerWidth);
        setHeight(window.innerHeight);

    }



    return(<>
    
        <p onChange={handleWindowSize}>Window Width: {width}px</p>
        <p onChange={handleWindowSize}>Window height: {height}px</p>

    
    </>);
 
}
export default SecondExample