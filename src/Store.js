import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Navb from "./components/Navb"
import { Nav } from 'react-bootstrap';
import storeStyles from './store.module.css';
import z from './images/login.png'
import CartItem from "./CartItem"
import { useEffect, useState } from 'react';
import {PRODUCTS} from "./Products"
import Product from "./Product"
import StoreMap from "./StoreMap"
import map from './map.module.css';



export const Store = (props)=>{
    return(
     <div>
        <Navb/>
            <div>
            <div className={map.stuff}>{PRODUCTS.map((product,i)=> <div key = {i}>
              <StoreMap data={product}/>
        </div>
          
        )}
        </div>
                
                <Container fluid className={storeStyles.containerDivStore}>
                    <Row>
                    <Col sm={4} className={storeStyles.secTwoLeft}>
                    <Card className={storeStyles.storeCardItself}>
                        <Card.Body className={storeStyles.storeBodies}>
                        <img src={props.pen} className={storeStyles.TEST} onClick={()=>props.funcTwo(<CartItem></CartItem>)}></img>
                        {/* <img src={props.pen} className={storeStyles.TEST} onClick={()=>props.funcTwo(props.pen)}></img> */}
                        </Card.Body>
                        <h3 className={storeStyles.prices} > </h3>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card className={storeStyles.storeCardItself}>
                        <Card.Body className={storeStyles.storeBodies}>
                        <img src={props.pen} className={storeStyles.TEST} onClick={props.funcTwo}></img>
                        </Card.Body>
                        <h3 className={storeStyles.prices} > $540 </h3>
                        </Card>
                    </Col>
                    <Col sm={4}>
                    <Card className={storeStyles.storeCardItself}>
                        <Card.Body className={storeStyles.storeBodies}>
                        <img src={props.pen} className={storeStyles.TEST} onClick={props.funcTwo}></img>
                        </Card.Body>
                        <h3 className={storeStyles.prices} > $365 </h3>
                        </Card>
                    </Col>
                        
                    </Row>
                    <Row className={storeStyles.bottomRow}>
                    <Col sm={4} className={storeStyles.secTwoLeft}>
                    <Card className={storeStyles.storeCardItself}>
                        <Card.Body className={storeStyles.storeBodies}>
                        <img src={props.pen} className={storeStyles.TEST} onClick={props.funcTwo}></img>
                        </Card.Body>
                        <h3 className={storeStyles.prices} > $310 </h3>
                        </Card >
                    </Col>
                    <Col sm={4}>
                        <Card className={storeStyles.storeCardItself}>
                        <Card.Body className={storeStyles.storeBodies}>
                        <img src={props.pen} className={storeStyles.TEST} onClick={props.funcTwo}></img>
                        </Card.Body>
                        <h3 className={storeStyles.prices} > $225 </h3>
                        </Card>
                    </Col>
                    <Col sm={4}>
                    <Card className={storeStyles.storeCardItself}>
                        <Card.Body className={storeStyles.storeBodies}>
                        <img src={props.pen} className={storeStyles.TEST} onClick={props.funcTwo}></img>
                        </Card.Body>
                        <h3 className={storeStyles.prices} > $139 </h3>
                        </Card>
                    </Col>
                        
                    </Row>
                </Container>
            </div>
        </div>
    )
}

// element={<Store pen={G} funcTwo={storeClickers}/>} p={prices}

export default Store