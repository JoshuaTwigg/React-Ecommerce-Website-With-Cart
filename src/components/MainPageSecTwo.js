import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const MainPageSecTwo = (props)=>{
    return(
    <Container fluid className='containerDiv'>
      <Row>
      <Col sm={6} className="secTwoLeft2">
        <h1>FOOTER</h1>
        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
             doloremque laudantium,
             totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
             architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
              quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
              magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
               quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
               adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                 ad minima veniam, quis nostrum exercitationem ullam corporis 
                 suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                  Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                   esse quam nihil molestiae consequatur, vel illum qui dolorem eu
                   m fugiat quo voluptas nulla pariatur?"</p>
      </Col>
      <Col sm={6}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#2E2E4F" d="M37.1,-32.7C49.9,-24.3,63.3,-12.1,66.9,3.6C70.4,19.2,64.1,38.5,51.3,42.2C38.5,45.9,19.2,34.2,-0.7,34.9C-20.7,35.6,-41.4,48.9,-45.7,45.1C-50.1,41.4,-38.1,20.7,-33.7,4.4C-29.2,-11.8,-32.3,-23.6,-28,-32.1C-23.6,-40.5,-11.8,-45.6,0.2,-45.7C12.1,-45.9,24.3,-41.1,37.1,-32.7Z" transform="translate(100 100)" />
        </svg>
      </Col>
        
      </Row>
    </Container>
    )
}

export default MainPageSecTwo