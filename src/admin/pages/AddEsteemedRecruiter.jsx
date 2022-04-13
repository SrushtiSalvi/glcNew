import React, { useState } from 'react'

import FloatingLabelInput from '../shared/FloatingLabelInput'
import { addEsteemedRecruiters } from '../api/common'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddEsteemedRecruiter = () => {
  let navigate = useNavigate()
  const [formData, setFormData] = useState({})
  const [content, setContent] = useState('')
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = new FormData()
    body.set('image', formData.image)
    // body.append('image', formData.image)
    let res = await addEsteemedRecruiters(body)
    if (res['success']) {
      toast.success(res['message'])
      setFormData({})
      navigate('/admin/esteemed-recruiters')
    } else {
      toast.error(res['message'])
    }
  }
  return (
    <div className="p-5 flex-grow">
      <form
        className="w-1/2 mx-auto mt-5 shadow-lg p-5"
        onSubmit={handleSubmit}
      >
        <div className="relative z-0 mb-6 w-full group">
          <FloatingLabelInput
            type="file"
            name="image"
            label="Logo"
            onChange={(e) => {
              setFormData({
                ...formData,
                image: e.target.files[0],
              })
            }}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddEsteemedRecruiter
