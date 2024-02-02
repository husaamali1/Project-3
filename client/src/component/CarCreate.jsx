import { useEffect, useState } from 'react'
import { Form, useActionData, useNavigate } from 'react-router-dom'
import ImageUpload from './ImageUplod'

export default function Carcreate() {
  const res = useActionData()
  const navigate = useNavigate()

  const [ image, setImage ] = useState('')

  useEffect(() => {
    console.log(res)
    if(res?.status === 201){
      console.log('Created succesfully')
      navigate(`/cars/${res.data.id}`)
    } 
  }, [res, navigate])

  return (
    <>
      <h1 className='text-center bold display-3 mb-4'>List Your Car</h1>`
      <Form className='form' method='POST'>
      <label hidden htmlFor="make">Make</label>
        <input type="text" name="make" placeholder='Make' />
        <label hidden htmlFor="model">Model</label>
        <input type="text" name="model" placeholder='Model' />
        <label hidden htmlFor="year">Year</label>
        <input type="text" name="year" placeholder='Year' />
        <label hidden htmlFor="origin">Origin</label>
        <input type="text" name="origin" placeholder='Origin' />
        <label hidden htmlFor="price">Price</label>
        <input type="number" name="price" placeholder='Price' />
        <label hidden htmlFor="description">Description</label>
        <textarea name="description" placeholder='Description'></textarea>
       <ImageUpload image={image} setImage={setImage} />
        {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}
        <button className="btn btn-outline-secondary" type="submit">Create</button>
      </Form>
    </>
  )
}