
import Navbar from 'react-bootstrap/Navbar';
import {Navb} from './components/Navb'
import {PRODUCTS} from "./Products"
import {Product} from "./Product"
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useContext, useState} from 'react';


const appContext = createContext(null)







export const StoreMap = (props)=>{
    // const [cart,setCart] = useState([])

    // const addToCart = (product)=>{
    //     // console.log(cart.length)
    //     // console.log(product)
    //     // setCart([...cart, product])
    // }
    
    return(
       
        <div>
            <Navb cartLength = {props.cartLength} productItem ={props.productItem}/>
            <div className='tit'>
                {PRODUCTS.map((product,idx)=>(
                <Product key={idx} data={product} addCart={props.addCart} />
                ))}
            </div>

        </div>
    )
}


export default StoreMap

