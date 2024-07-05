import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("User");
    const [quan, setQuan] = useState();
    const [comment, setComment] = useState();
    const [payment, setPayment] = useState("");
    const [shipping, setShippin] = useState();


    function handleNameChange(event){
        setName(event.target.value)
    }
    
    function handleQuanChange(event){
        setQuan(event.target.value)
    }

    function handleCommentChange(event){
        setComment(event.target.value)
    }

    function handlePaymentChange(event){
        setPayment(event.target.value)
    }

    function handleShippingChange(event){
        setShippin(event.target.value)
    }

    return(<div>
        <input value={name} onChange={handleNameChange}/>
        <p>Name:{name}</p>

        <input type="number" value={quan} onChange={handleQuanChange} />
         <p>Number: {quan}</p>

        <textarea  value={comment} placeholder='tangina mo' onChange={handleCommentChange}></textarea>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an Option</option>
            <option value="Gcash">G-Cash</option>
            <option value="Visa">Visa</option>
            <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
        <input type="radio" value={"Pick Up"} checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
            Pick Up
        </label>

        <label>
        <input type="radio" value={"Delivery"} checked={shipping === "Delivery"} onChange={handleShippingChange}/>
            Delivery
        </label>

        <p>Shipping Method: {shipping}</p>
        
    </div>);

}
export default MyComponent
//setName example explanation:
// the value of the input is set to {name}, when you change the value of the input(onChange will activate), 
//the value(which is the name) will also be change. so the name in <p> will also be change