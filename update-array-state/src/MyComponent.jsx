import React, {useState} from 'react';

function MyComponent(){

    const [foods, setFood] = useState(["Apple","Orange","Pineapple","Pomelo"]);

    function handleAddFood(){

        const newFood = document.querySelector('#foodInput').value;
        document.querySelector('#foodInput').value = "";

        setFood(f => [...f, newFood])


    }

    function handleRemoveFood(index){

        setFood(foods.filter((_, i) => i !== index))

    }

    

    return(<div>
        <h2>List Food</h2>
        <ul>
            {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" id='foodInput' placeholder='Enter food name' />
        <button onClick={handleAddFood}>Add Food</button>
    </div>);
}

export default MyComponent