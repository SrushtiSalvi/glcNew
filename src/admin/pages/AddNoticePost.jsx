import React, { useState } from 'react'

import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import FloatingLabelInput from '../shared/FloatingLabelInput'
import { addNoticesPost } from '../api/notices'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddNoticePost = () => {
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
    body.set('title', formData.title)
    body.set('content', content)
    // body.append('image', formData.image)
    let res = await addNoticesPost(body)
    if (res['success']) {
      toast.success(res['message'])
      setFormData({})
      navigate('/admin/notices')
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
            type="text"
            name="title"
            required
            label="Title"
            onChange={handleChange}
            value={formData.title}
          />
        </div>

        <div className="relative z-0 mb-6 w-full group">
          {/* <FloatingLabelInput
            type="textarea"
            name="content"
            required
            label="Content"
            onChange={handleChange}
            value={formData.content}
          /> */}
          <CKEditor
            editor={ClassicEditor}
            data={content}
            onReady={(editor) => {
              console.log('Editor is ready to use!')
            }}
            onChange={(event, editor) => {
              const data = editor.getData()
              setContent(data)
            }}
            // onBlur={(event, editor) => {
            //   console.log('Blur.', editor)
            // }}
            // onFocus={(event, editor) => {
            //   console.log('Focus.', editor)
            // }}
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

export default AddNoticePost
