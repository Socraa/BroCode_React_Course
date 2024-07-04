
function Button(){

    // let count = 0;

    // const handleClick = (name) => {
    //     if (count < 3){
    //         count++;
    //         console.log(`${name}, you click me ${count} times`);
    //     }else{
    //         console.log(`${name}, stop fucking clicking me`);
    //     }
    // }

    const handleClick = (e) =>  e.target.textContent = "Bitch";

    return(
        <button onDoubleClick={(e) => handleClick(e)}>Click Me</button> 
    );

}
export default Button