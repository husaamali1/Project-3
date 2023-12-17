import { useLoaderData, Link, useActionData, useNavigate, Form } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ImageUpload from './ImageUplod'
import { activeUser, removeToken } from '../utils/helpers/common'

export default function CarSingle() {
  const car = useLoaderData()
  console.log(car)
  const { id, make, model, year, origin, description, price } = car
  const res = useActionData()
  const navigate = useNavigate()
  useEffect(() => {
    console.log(res)
    if (res?.status === 202) {
      console.log('CREATED SUCCESSFULLY')
      navigate('/')
    }
  }, [res, navigate])
  
  const [ image, setImage ] = useState(car.image)
  
  console.log(activeUser())
  

  return (
    <>
      <h1 className='text-center bold display-3 mb-4'>Single Car</h1>
      <div id='single-conatiner'>
        <div key={id}>
          <h1>{make}</h1>
          <ImageUpload image={image} setImage={setImage} />
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



// work in progress!!!

// {activeUser() ?
//   <>
//    <Link to={`/cars/${id}/edit`}>
//     <button className='btn btn-outline-secondary' type='submit'>Edit</button>
//   </Link>
//   <Form method='DELETE'>
//     <button className='btn btn-outline-secondary' type='submit'>Delete</button>
//   </Form>
//   </>
//   :
//   <>
//   <Link hidden to={`/cars/${id}/edit`}>
//     <button className='btn btn-outline-secondary' type='submit'>Edit</button>
//   </Link>
//   <Form hidden method='DELETE'>
//     <button className='btn btn-outline-secondary' type='submit'>Delete</button>
//   </Form> 
//   </>
//   }