import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'
import { useState } from 'react';
import axios from "axios"
import { useEffect } from 'react';



export const MainPageSecStore = (props)=>{
  

  const[page,setPage] = useState([])
  const[state,setState] = useState([])

  useEffect(() =>{
     axios.get("https://fakestoreapi.com/products").then((res)=>{
      // apiFunction(res.data)
      // setPage(res.data[0].image)
      console.log(res.data)
      setState(res.data)
  
  })
  },[])
    return(
    <Container fluid className='containerDivStore'>
      <Row>
      <Col sm={4} className="secTwoLeft">
      <Card className='storeCardItself'>
          <Card.Body className='storeBodies'>
            {/* <img src={props.z} className="cardImage"></img> */}
            <img src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" className="cardImage"></img>
            {
             state.map((x,index)=>
              {
                return(
                 console.log(x.image)
                  
                )
              })
            }
            {/* {page} */}
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4}>
        <Card className='storeCardItself'>
          <Card.Body className='storeBodies'>
          <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className="TEST"></img>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4}>
      <Card className='storeCardItself'>
          <Card.Body className='storeBodies'>
          <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" className="TEST"></img>
          </Card.Body>
        </Card>
      </Col>
        
      </Row>
      <Row>
      <Col sm={4} className="secTwoLeft">
      <Card className='storeCardItself'>
          <Card.Body className='storeBodies'>
          <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" className="TEST"></img>
          </Card.Body>
        </Card >
      </Col>
      <Col sm={4}>
        <Card className='storeCardItself'>
          <Card.Body className='storeBodies'>
          <img src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" className="TEST"></img>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4}>
      <Card className='storeCardItself'>
          <Card.Body className='storeBodies'>
          <img src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" className="TEST"></img>
          </Card.Body>
        </Card>
      </Col>
        
      </Row>
    </Container>
    )
}

export default MainPageSecStore