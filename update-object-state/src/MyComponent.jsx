import React, {useState} from 'react';

function MyComponent(){

    const [car, setCar] = useState({year: 2024, 
                                    make: "ford", 
                                    model: "mustang"});


    function handleYearChange(event){

        setCar(car => ({...car, year: event.target.value}));
    }

    function handleMakeChange(event){

        setCar(car => ({...car, make: event.target.value}));

    }

    function handleModelChange(event){

        setCar(c => ({...c, model: event.target.value}));


    }

return(<div>
    <p>Your Favorite Car is: {car.year} {car.make} {car.model}</p>
    <input type="number" value={car.year} onChange={handleYearChange}/> <br />
    <input type="type" value={car.make} onChange={handleMakeChange}/> <br />
    <input type="type" value={car.model} onChange={handleModelChange}/> <br />
</div>);
}

export default MyComponent