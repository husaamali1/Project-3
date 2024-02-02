import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'



export default function DisplayCars({ cars }){
  return (
    <Row>
    {cars.map(car => {
      const { id, make, model, image, price, year } = car
      return (
        <Col sm={3} style={{ marginBottom: '7px' }} key={id}>
          <div className='holder'>
            <Card style={{ width: '18rem' }}>
              <h4>{make}</h4>
              <h6>{model}</h6>
              <h6>{year}</h6>
              <Link to={`/cars/${id}`}>
              <Card.Img variant='top' src={image} />
              </Link>
              <p>£{price}</p>
              <Card.Body>
              </Card.Body>
            </Card>
          </div>
        </Col>
      )
    })
    }
  </Row>
  )
}