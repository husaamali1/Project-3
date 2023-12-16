import { useLoaderData, Link, useActionData, useNavigate, Form } from 'react-router-dom'
import { useEffect } from 'react'

export default function CarSingle() {
  const car = useLoaderData()
  console.log(car)
  const { id, make, model, year, image, origin, description, price } = car
  const res = useActionData()
  const navigate = useNavigate()
  useEffect(() => {
    console.log(res)
    if (res?.status === 202) {
      console.log('CREATED SUCCESSFULLY')
      navigate('/')
    }
  }, [res, navigate])


return (
  <>
    <h1 className='text-center bold display-3 mb-4'>Single Car</h1>
    <div id='single-conatiner'>
      <div key={id}>
        <h1>{make}</h1>
        <img src={image} alt='single-car' />
        <h2>{model}</h2>
        <h4>{year}</h4>
        <p>{description}</p>
        <h4>{origin}</h4>
        <h3>£{price}</h3>
      </div>
      <div className='buttons'>
        <Link to={`/cars/${id}/edit`}>
          <button className='btn btn-outline-secondary' type='submit'>Edit</button>
        </Link>
        <Form method='DELETE'>
        <button className='btn btn-outline-secondary' type='submit'>Delete</button>
        </Form>
      </div>
    </div>
  </>
)
}