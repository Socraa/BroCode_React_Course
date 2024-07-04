import React, {useState} from 'react';

function Counter(){

    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    }

    const decrement = () =>{
        setCount(count - 1);
    }

    const reset = () =>{
        setCount(0)
    }

    return(
        <div className='container'>
            <p id='numm'>{count}</p>
            <div className='buttons'>
                <button className='bnts' onClick={decrement}>Decrement</button>
                <button className='bnts' onClick={reset}>reset</button>
                <button className='bnts' onClick={increment}>Increment</button>
            </div>
        </div>
    );

}

export default Counter