import axios from 'axios'


export default function ImageUpload({ image, setImage }){
  async function handleImageUpload(e){
    const preset = import.meta.env.VITE_UPLOAD_PRESET
    const endpoint = import.meta.env.VITE_UPLOAD_URL
    const file = e.target.files[0]
  

    const data = new FormData()
    data.append(file)
    data.append(preset)

    const { data: { secure_url } } = await axios.post(endpoint, data)
   
    setImage(secure_url)
  }

  return (
    <>
   <img src={ image } alt='Car-images'/>
   <input type='hidden' name='image' value={image} className='images'/>
   <input type="file" onChange={handleImageUpload} />
    </>
  )

}