import { useLoaderData, Link } from 'react-router-dom'

// * Bootstrap compoenents
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import DisplayCars from './DisplayCars'

export default function Portfolio() {
  const portfolio = useLoaderData()
  console.log(portfolio)
  const { username, carsCreated } = portfolio
  return (
    <>
      <h1 className='text-center bold display-3 mb-4'>Portfolio</h1>
      <Container fluid className='portfolio'>
        <Row>
          <Col sm={12}>
            <h2>Welcome back, {username}</h2>
          </Col>
          <Col sm={8}>
            <h5>List items:</h5>
            <div className='car-list'>
              <DisplayCars cars={carsCreated}/>
            </div>
          </Col>
          <Col sm={4}>
            <div className='container'>
            <button className='btn btn-outline-secondary' type='submit' >
          <Link className='List-item' to={'/cars/create'}>List Items</Link>
          </button>
          </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}