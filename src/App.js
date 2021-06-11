import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Salman', 'Razzak'];
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'Pdf Reader', price: '$6.99' }
  ];

  const friends = [
    // { name: 'Abul Kalam', age: '11', profile: 'https://i.ibb.co/hKXtvy6/960x0.jpg' },
    { name: 'Abul Kalam', age: '11', profile: 'https://www.w3schools.com/howto/img_avatar.png' },
    { name: 'Hasnat Kaiser', age: '12', profile: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg' },
    { name: 'Raji', age: '13', profile: 'https://i.ibb.co/dcXZfXL/Kevin-de-Bruyne-AP-3-571-855.jpg' }
  ];
  const nayokNames = nayoks.map(nayok => nayok);
  console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        {/* {
          friends.map(friend => <Friends friend={friend}></Friends>)
        } */}
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product> */}
        {/* <Person name={nayoks[0]} naiyka="Mousumi"></Person>
        <Person name="Jasim" naiyka="Shabana"></Person>
        <Person name="Bappa Raj" naiyka="Cheka"></Person> */}
        <Person name="Munna" job="football"></Person>
        <Person name="Masum" job="dorshok"></Person>
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  // const handleIncrease =() => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count -1)}>Decrease</button>
      {/* <button onClick={handleIncrease}>Increased</button> */}
      <button onClick={() => setCount(count + 1)}>Increased</button>
    </div>
  )
}
function Friends(props) {
  const { name, age, profile } = props.friend;
  return (
    <div className="card">
      <img src={profile} alt="Avatar" ></img>
      {/* <img src="img_avatar.png" alt="Avatar" style="width:100%" /> */}
      <div className="container">
        <h4><b>{name}</b></h4>
        <p>Age: {age}</p>
      </div>
    </div>
  )
}
function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const { name, price } = props.product;
  console.log(name, price);
  return (
    <div style={productStyle}>
      <h4>{name}</h4>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
// function Person(props) {
//   const personStyle = {
//     border:'2px solid red',
//     margin:'10px'
//   }
//   console.log(props);
//   return <div style={personStyle}>
//   <h1>Nayok: {props.name}</h1>
//   <h3>Hero of {props.naiyka}</h3>
//   </div> 
// }

function Person(props) {
  return (
    <div style={{ border: '2px solid goldenrod', margin: '10px', width: '400px' }}>
      <h3>My name: {props.name} </h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}
export default App;
