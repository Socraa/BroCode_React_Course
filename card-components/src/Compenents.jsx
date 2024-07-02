import ProfilePic from './assets/nietzsc.png'

function Card(){
    return(
        <div className="card">
            <img className='image' src={ProfilePic} alt="profile pic" />
            <h2 className='cardTitle'>Nietzsche</h2>
            <p>I'm studying React and Philosophy</p>
        </div>
    );
}

export default Card