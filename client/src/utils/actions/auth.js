import axios from 'axios'
import { formToObj } from '../helpers/common'


export async function registerUser(request){
  const data = await formToObj(request)
  return await axios.post('/api/register', data)
}

export async function loginUser(request){
  const data = await formToObj(request)
  console.log(data)
  return await axios.post('/api/login', data, {
    validateStatus: () => true,
  })
}
