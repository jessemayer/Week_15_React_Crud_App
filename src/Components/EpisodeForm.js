import React, { useState } from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

const initialState ={
    name: '',
    body: ''
}

const EpisodeForm = () => {
    const [formData, setFormData] = useState(initialState)

    const onChange = (event) =>
    setFormData({...formData, [event.target.name]: event.target.value})

    // create-post portion of crud
    const postData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        const data = await res.json()
        console.log(data)
    }


    const onSubmit = event => {
        event.preventDefault()
        postData()
        setFormData(initialState)
    }


  return (
    <div>
        {/* {console.log(formData)} */}
        <h2>Select Photo to Review</h2>
        <form onSubmit={onSubmit}>
           <div>
           <input 
                type="text"
                placeholder='name '
                name='name'
                value={formData.name}
                onChange={onChange}
                />
           </div>
           <div>
           <input 
                type="text"
                placeholder='body'
                name='body'
                value={formData.body}
                onChange={onChange}
                />
           </div>
              <input type='submit' className='btn btn-primary'/>
        </form>
      
    </div>
  )
}

export default EpisodeForm
