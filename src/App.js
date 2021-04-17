import logo from './logo.svg';
import './App.css';
import { isValidElement, useEffect, useState } from 'react';

function App() {
const products =[
  {name:"Photoshop", price: "$90.00"},
  {name:"Illustrator", price: "60.00"},
  {name:"Adobe Reader", price: "$40.00"}
]

  return (
    <div className="App">
      <header className="App-header">
<Counter></Counter>
<Users></Users>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        
        
    
        <Person name="michel Jordan"></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data =>setUsers(data))
  },[])
  return(
    <div>
      <h2>Users: {users.length}</h2>
     <ul>
       {
         users.map(user =><li>{user.name}</li>)
       }
     </ul>
    </div>
  );
}

function Counter(){
const [count,setCount]= useState(10);

  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

function Product(props) {

  const style = {
    border: '1px solid grey',
    borderRadius: '10px',
    backgroundColor: "lightgrey",
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name,price}= props.product;
  return (
    <div style={style}>
      <h2>{name}</h2>
      <h3>{price}</h3>
    </div>
  )
}

function Person(props) {
  const style = {
    border: '2px solid red',
    margin: '10px',
    padding: '20px'
  }
  return (
    <div style={style}>
      <h1>Name: {props.name}</h1>
      <h3>Learning web development</h3>
    </div>
  );
}

export default App;
