import List from './List.jsx'

function App() {

  const fruits = [{id: 1, name: "apple", calories:"73"},
    {id: 2, name: "banana", calories:55},
    {id: 3, name: "coconut", calories:33},
    {id: 4, name: "orange", calories:88},
    {id: 5, name: "pineapple", calories:129}];

  const vegetable = [{id: 6, name: "tomato", calories:59},
                     {id: 7, name: "potato", calories:525},
                     {id: 8, name: "eggplant", calories:313},
                     {id: 9, name: "garlic", calories:22},
                     {id: 10, name: "onion", calories:19}];

   return(
   
    <>
   {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
   {vegetable.length > 0 ? <List items={vegetable} category="Vegetables"/> : null}
    </>

  );

}

export default App
