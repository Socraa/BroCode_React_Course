import React, {useState} from 'react';
function MyCompenent(){

    const [count, setCount] = useState(0);

    function increment(){
        setCount(c => c + 1) // updater function | c will represent the useState value which is 0
        setCount(c => c + 1)
        setCount(c => c + 1)
    }

    //GPT explanation:
    //When you call setCount with an updater function like setCount(c => c + 1), 
    //React internally calls this updater function and passes the current state value (count) as the argument (c).

    function reset(){
        setCount(0)
    }

    function decrement(){
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
    }

    return(<div>
        <p>{count}</p>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>


    </div>);

}
export default MyCompenent