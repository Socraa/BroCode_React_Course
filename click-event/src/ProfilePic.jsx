
 function ProfilePic(){

    const imageUrl = './src/assets/nietzsc.png'

    // const handleClick = () => console.log("God is dead, and we have killed him");

    const handleClick2 = (e) => e.target.style.display = "none"; // hide the image

    return(<img onClick={(e) => handleClick2(e)} src={imageUrl}></img>);

 }

 export default ProfilePic