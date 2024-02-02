import { useEffect } from 'react'
import { Form, useActionData, useNavigate } from 'react-router-dom'



export default function Register(){
  const res = useActionData()
  const navigate = useNavigate()

  useEffect(() => {
    if (res?.status === 201) {
      navigate('/login')
    }
  }, [res, navigate])

return (
  <>
  
  <div className='resgister'>
  <h1 className='text-center bold display-3 mb-4'>Register</h1>
    <Form className='form' method='POST'>
      <input type='text' name='username' placeholder='Username...'/>
      <input type='email' name='email' placeholder='Email...'/>
      <input type='password' name='password' placeholder='Password...'/>
      <input type='password' name='passwordConfirmation' placeholder='Confirm Password...'/>
      <button className='btn btn-outline-secondary' type='submit'>Register</button>
    </Form>
    </div>
  </>
)
}