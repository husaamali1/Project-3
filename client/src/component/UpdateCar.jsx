import { useEffect } from 'react'
import { Form, useActionData, useLoaderData, useNavigate } from 'react-router-dom'

export default function UpdateCar(){
const res = useActionData()
const navigate = useNavigate()
const car = useLoaderData()
console.log(car)
const { id } = car
useEffect(() => {
  console.log(res)
  if ( res?.status ===200){
    console.log('Created successfully!')
    navigate(`/cars/${id}`)
  }
}, [res, id, navigate])


  return (
    <>
    <h1 className='text-center bold display-2 mb-4'>Edit Car</h1>
    <Form className='form' method='POST'>
      <label hidden htmlFor="make">Make</label>
        <input type="text" name="make" placeholder='Make' defaultValue={car.make}/>
        <label hidden htmlFor="model">Model</label>
        <input type="text" name="model" placeholder='Model' defaultValue={car.model}/>
        <label hidden htmlFor="year">Year</label>
        <input type="text" name="year" placeholder='Year' defaultValue={car.year}/>
        <label hidden htmlFor="origin">Origin</label>
        <input type="text" name="orgin" placeholder='Origin' defaultValue={car.origin}/>
        <label hidden htmlFor="price">Price</label>
        <input type="text" name="price" placeholder='Price' defaultValue={car.price}/>
        <label hidden htmlFor="description">Description</label>
        <textarea name="description" placeholder='Description' defaultValue={car.description}></textarea>
        <label hidden htmlFor="image">Image</label>
        <input type="text" name="image" placeholder='Image' defaultValue={car.image}/>
        {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}
        {/* <Link to={`/cars/${id}`}> */}
        <button className="btn btn-secondary" type="submit">Edit</button>
        {/* </Link> */}
      </Form>
    </>
  ) 
}