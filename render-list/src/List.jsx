import PropTypes from 'prop-types'
function List(props){

    const itemList = props.items;
    const category = props.category;



        // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical order
        // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse aphabetical order
        // fruits.sort((a, b) => a.calories - b.calories); // Numeric order

        // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); // filter only the fruits with less than 100 calories



    const listItems = itemList.map(item =>  <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>);

    return(
    <>
    <h1 className="h11">{category}</h1>
    <ol className="listItems">{listItems}</ol>
    </>
    
    );
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
}
List.defaultProps = {
    category: "Undefined",
    items: [],
}

export default List