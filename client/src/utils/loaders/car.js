import axios from 'axios'
import {  getToken } from '../helpers/common'

export async function getAllCars(){
  const { data } = await axios('/api/cars')
  return data
}

// export async function getSingleCar(id){
//   return await axios(`/api/cars/${id}`)
// }
export async function getSingleCar(id){
  const { data } = await axios.get(`/api/cars/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }) 
  return data
} // need to go over!!


export async function getPortfolio(){
  const { data } = await axios.get('/api/portfolio', {
    headers: {
      Authorization: `Bearer ${getToken()}`

    }
   })
   return data
}



// export async function getSinglePortfolio(id){
//   return await axios(`/api/portfolio/${id}`)
// }