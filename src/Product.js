import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import map from './map.module.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



export const Product = (props)=>{
    const{id,price,image} = props.data
    return(
    
        <div className='grider'>
             <Card className='mapCard'>
                <Card.Body className='mapCard'>
                <img src={image} className={map.image}></img>
                <div>{"$" + price}</div>
                <div> <Button className='booton'  onClick={()=>props.addCart(props.data)}>add To Cart</Button></div>
               
                </Card.Body>
            </Card>
            
        </div>

      
      
    )
}

export default Product

