import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import cart from './cart.module.css';
import {Navb} from './components/Navb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus,faPlus } from '@fortawesome/free-solid-svg-icons'




export const Item = (props)=>{
    return(
        <div>
            <div><img src={props.state} className={cart.itemImage}></img></div>
                <div>
                    <Button><FontAwesomeIcon icon={faMinus} className={cart.itemDivPlus} onClick={()=> props.math(0)}/></Button>
                    <h3 className={cart.itemDiv}>{props.number}</h3>
                    <Button><FontAwesomeIcon icon={faPlus} className={cart.itemDivMinus} onClick={()=> props.math(1)} /></Button>
                    <div className={cart.line}></div>
                </div>
        </div>
        
    )
}



export default Item