import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import cart from './cart.module.css';
import {Navb} from './components/Navb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus,faPlus } from '@fortawesome/free-solid-svg-icons'
import CartMap from './CartMap'

export const Cart = (props)=>{
  
    console.log(props.productItem)
    const{id,price,image} = props.productItem
    return(
        <div className={cart.outerDiv}>
            
            <Navb cartLength = {props.cartLength}/>
            <div className={cart.blobberOne}>

            </div>
            
            <div className={cart.blobberTwo}>

            </div>
            <div className={cart.blobberTwoTwo}>

            </div>
            <Card className={cart.cartCardMain}>
                
                <Card.Body className={cart.cartCardItself}>
                <Container className={cart.cartContainer}>
                    <Row>
                         <Col>
                            <Card className={cart.cardItem}>
                                <Card.Body className={cart.itemDiv}>
                                    <h1>Shopping Cart</h1>
                                    
                                    <div className={cart.itemDiv}> 
                                        {/* <img src={props.state} className={cart.itemImage}></img> */}
                                        {/* src={props.tes} this is a div list to store items*/}

                                        <div >
                                        {props.productItem.map((prod,idx)=>(
                                            <CartMap key={idx} data={prod} a={props.remove} />
                                        ))}
                                        </div>
                                        {/* <Button><FontAwesomeIcon icon={faMinus} className={cart.itemDivPlus} onClick={()=> props.math(0)}/></Button> */}
                                        {/* <h3 className={cart.itemDiv}>{props.number}</h3> */}
                                        {/* <Button><FontAwesomeIcon icon={faPlus} className={cart.itemDivMinus} onClick={()=> props.math(1)} /></Button> */}
                                        {/* <div className={cart.line}></div> */}
                                        
                                        {/* {props.test} */}
                                    </div>

                                 
                                    
                                </Card.Body>
                            </Card>
                         </Col>
                         <Col>
                            <Card className={cart.c}>
                                <Card.Body >
                                    <h2>Total amount due:</h2>
                                    <p>{props.totalCost}</p>
                                    <h3>Shipping NAN</h3>
                                    <Button type="button" className='mainButton'  >Checkout</Button>
                                </Card.Body>
                            </Card>
                         </Col>
                    </Row>
                </Container>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cart

// {cart.cartCardItself}
// {.cartCard}