import axios from 'axios'


export default function ImageUpload({ formData, setFormData }){
  async function handleImageUpload(e){
    const preset = import.meta.env.VITE_UPLOAD_PRESET
    const file = import.meta.env.VITE_UPLOAD_URL

    const data = new FormData()
    data.append(file)
    data.append(preset)

    const { data: { secure_url } } = await axios.post(endpoint, data)
    setFormData({ ...formData, image: secure_url })
  }

  return (
    <>
   {formData.image ?
   <img src={formData.image} alt='Car-images'/>
   :
   <input type='file' name='image' onChange={handleImageUpload}/>
   }
    </>
  )

}