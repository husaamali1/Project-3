import { useLoaderData } from 'react-router-dom'

// Bootstrap components
import Container from 'react-bootstrap/Container'
// Component
import DisplayCars from './DisplayCars'


export default function AllCars() {
  const cars = useLoaderData()
  console.log(cars)
  return (
    <>
      <section id='Car-list' className='block blog-block'>
        <Container fluid>
          <h1 className='text-center bold display-2 mb-4'>Car List</h1>
          <h5 className='subtitle text-center'>Latest Cars Avaliable</h5>
          <DisplayCars cars={cars}/>
        </Container>
      </section>
    </>
  )

}























{/* <h1 className='text-center bold display-3 mb-4'>Car List</h1>
<Card style={{ width: '32rem' }}>
  {cars.map(car => {
    <Card.Img variant='top' src='lbkencf' />
    const { id, make, model, image } = car
    return (
      <div key={id}>
        <h3>{make}</h3>
        <p>{model}</p>
        <Link to={`/cars/${id}`}>
          <img src={image} alt='car' />
        </Link>
      </div>
    )
  })}
<Card.Body>
  <Card.Text>
  </Card.Text>
 
</Card.Body>
</Card> */}


