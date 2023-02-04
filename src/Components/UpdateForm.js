import React, { useState } from 'react'

const initialState ={
    id: '',
    name: '',
    body: ''
}

const UpdateForm = () => {

    const [formData, setFormData] = useState(initialState)

    const onChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    // put method update portion of CRUD
    const updateData = async () => {
        const res =  await fetch(`https://jsonplaceholder.typicode.com/comments/${formData.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })

        const data =  await res.json()
        console.log(data)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        updateData()
        setFormData(initialState)
    }

  return (
    <div>
      <h2>Update Photo Comments</h2>
      <form onSubmit={onSubmit} className={'mb-3'}>
           <div>
           <input 
                className='form-text mb-1'
                type="text"
                placeholder='Enter Photo ID'
                name='id'
                value={formData.id}
                onChange={onChange}
                />
           </div>
           <div>
           <input 
                className='form-text mb-1'
                type="text"
                placeholder='Enter Photo Name'
                name='name'
                value={formData.name}
                onChange={onChange}
                />
           </div>
           <div>
           <input 
                className='form-text mb-1'
                type="text"
                placeholder='Review photo'
                name='body'
                value={formData.body}
                onChange={onChange}
                /> 
           </div>
              <input type='submit' className='btn btn-success'/>
      </form>
    </div>
  )
}

export default UpdateForm
