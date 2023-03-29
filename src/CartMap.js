import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import cart from './cart.module.css';
import {Navb} from './components/Navb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus,faPlus,faXmarkCircle } from '@fortawesome/free-solid-svg-icons'

export const CartMap = (props)=>{
    const{id,price,image} = props.data
    return(
    
        <div className='grider'>
           
                <img src={image} className="carterImage"></img>
                <div className='price'>{"$" + price}</div>
                <Button><FontAwesomeIcon icon={faMinus} className="butt3"/></Button>
                                        <h3 className={cart.itemDiv}>{props.number}</h3>
                                        <Button><FontAwesomeIcon icon={faPlus} className="butt1"  /></Button>
                                        <Button><FontAwesomeIcon icon={faXmarkCircle} className="butt2" onClick={()=>props.a(props.data)}>remove</FontAwesomeIcon></Button> 
                                        <div className={cart.line}></div>
            
        </div>

      
      
    )
}

export default CartMap