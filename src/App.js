
import './App.css';
import logo from './images/chat.png'
import threeDHand from './images/a.png'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {MainPage} from './components/MainPage';
import {Navb} from './components/Navb'
import { MainPageSecOne } from './components/MainPageSecOne';
import { MainPageSecTwo } from './components/MainPageSecTwo';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MainPageSecStore} from './components/MainPageSecStore';
import react from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Store from "./Store"
import Cart from "./Cart"
import axios from "axios"
import X from './images/g.png'
import char from './images/c.png'
import z from './images/login.png'
import G from './images/login.png'
import T from './images/login.png'
import Todo from "./components/Todo"
import { useNavigate } from 'react-router-dom';
import StoreMap from "./StoreMap"
import {Product} from "./Product"

// const x = fetch("https://fakestoreapi.com/products")
// .then(res=>{
//   if(res.ok){
//     console.log("SUCCESS" + res.statusText)
//   }else{
//     console.log("FAILURE" + res.statusText + res.url)
//   }
//   res.json()})
// .then(data=>console.log(data))

 





// use effect with empty array so it only calls api once not infinitely
// var express = require('express');  
// var app = express();



// app.use(cors({
//   origin:"http//localhost:3000",
// }))





function App() {
  const [cart,setCart] = useState([])

  const addToCart = (product)=>{
    // console.log(cart.length)
    // console.log(product)
    setCart([...cart, product])
    return cart

}




const removeItem=(productt) =>{
  console.log("REMOVE")
  console.log(productt)
  setCart(cart.filter((productt)=> Product !== productt )) // filter through setcarts values in app.js then remove the one not equal to the one passed to function
}

{cart.map((prood,idx)=>(
<div key={idx}>{prood}</div>
))}


  let[prices,setPrices] = useState({price1: 639, price2: 540 , price3: 365, price1: 310, price2: 225 , price3: 139})
  let[amount,setAmount] = useState(0)
  const[age,setAge] = useState([])
  const[image,setImage] = useState("")
  let[quantity, setQuantity] = useState(1)

  const[apiData, setApiData] = useState([])

  const[cartComponent, setComponent] = useState([])

  const addSubtract = (num)=>{
    
    ((num == 1) ? setQuantity(quantity += 1) : setQuantity(quantity -= 1))
    if(quantity < 0){
      setQuantity(0)
    }
  }

  useEffect(() =>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
      console.log(res.data)
      var data = res.data
      var arr = Array.from(data)

      console.log(arr)
      // arr.map(arr)
      
      // apiFunction(res.data)
      setAge(res.data[0].image)
      setApiData(res.data[0].image)
  })
  },[])

  const navigate = useNavigate();
  const mainButton = ()=>{
    
    navigate('/Store');

  }

  const storeClickers = (src)=>{
    
    setImage(src)
    setComponent(src)
    
  }



  const apiFunction = (data)=>{
    // console.log(data[0].id)
    // console.log(data[0].title)
    // console.log(data[0].image)
   
  }

  return (
    <div>
       {/* <Navb/> */}
       {/* {console.log(age + "STATE WORKING!")} */}
       {/* {console.log(prices.price1)} */}
       {/* {imageFunction()} */}

        <Routes>
            <Route path="/" element={<MainPage image={X} test={z} api={apiData} p={char} func={mainButton}/>} />
            <Route path="/Store" element={<StoreMap  addCart={addToCart} cartLength = {cart.length} productItem ={cart}/>} />
            <Route path="/Cart"  element={<Cart  remove={removeItem} productItem={cart} tes={T} cartLength = {cart.length} state={image} number={quantity} numberSet={setQuantity} setState={setImage} math={addSubtract} totalCost={amount} test={cartComponent}/>} />
        </Routes>
        {/* <Todo></Todo> */}
       
    </div>
  );
}





export default App;

