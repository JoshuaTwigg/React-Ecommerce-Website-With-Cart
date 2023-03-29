import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import MainPageSecOne from './MainPageSecOne';
import MainPageSecTwo from './MainPageSecTwo';
import MainPageSecStore from './MainPageSecStore';
import Navb from "./Navb"


export const MainPage = (props)=>{
    return(
     
    <div className="mainDiv">
     
    <Navb/>
   <div>
    <Container fluid className='containerDiv'>
      
      <Row>
      <Col sm={6}>
        <h1 className='mainHeading' >Online Shopping</h1>
         <h3 className='mainText'>architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
            quia voluptas sit aspernatu
             
                    </h3>
        <Button type="button" className='mainButton' onClick={props.func} >Start Shopping</Button>
      </Col>
      <Col sm={6}>
         <Card className='carder'>
            <Card.Body className='mainCard'>
            <img src={props.image} className="mainImage"></img>
            <img src={props.p} className="character"></img>
            </Card.Body>
            <div></div>
        </Card> 
      </Col>    
      </Row>
    </Container>

    <div className='x'>
                    {/* <div className='blobThree'>
                        
                    </div> breaking the nav somehow */}
                    <div className='blobTwo'>
                        
                    </div>
                    {/* blob and blob3 are breaking shit <div className='blob'>
                       
                    </div> */}
                    
                 </div>
                 <div>
                    {/* <img src={props.image} className="mainImage"></img> */}
                 </div>

                       <MainPageSecOne/> 

                       <MainPageSecStore z={props.test} API = {props.api}/>

                       
                       
                       {/* <MainPageSecTwo/> */}

                     
                       
                       
                     
            </div>
        </div>
        

 

      
    )
}










export default MainPage