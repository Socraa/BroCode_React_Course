// import styles from './Button.module.css' // module way of using css 

const styles = {

        backgroundColor: "darkcyan",
        border: "2px solid",
        height: "60px",
        width: "100px",
        margin: "20px",
        borderRadius: "20px"
}

function Button(){
    return(
        <button style={styles}>Click me</button>
    );
}

export default Button