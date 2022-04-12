import React, { useEffect, useState } from 'react'
import { editVacancyPost, updateImage } from '../api/posts'
import { useNavigate, useParams } from 'react-router-dom'

import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import FloatingLabelInput from '../shared/FloatingLabelInput'
import { getPostById } from '../../web/api/api'
import { toast } from 'react-toastify'

const EditVacancyPost = () => {
  const { id } = useParams()
  let navigate = useNavigate()

  const [formData, setFormData] = useState({})
  const [content, setContent] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPostById(id)
      if (response['success']) {
        setFormData({ ...response.data.vaccancy_post })
        setContent(response.data.vaccancy_post.content)
      }
    }
    fetchData()
  }, [])

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = new FormData()
    body.set('_id', id)
    body.set('company_name', formData.company_name)
    body.set('eligibility', formData.eligibility)
    body.set('position', formData.position)
    body.set('joining', formData.joining)
    body.set('deadline', formData.deadline)
    body.set('status', formData.status)
    body.set('experience', formData.experience)
    body.set('content', content)

    const imgBody = new FormData()
    imgBody.set('image', formData.image)
    imgBody.set('_id', id)
    let imgRes = await updateImage(imgBody)
    if (imgRes['success']) {
      toast.success(imgRes['message'])
    } else {
      toast.error(imgRes['message'])
    }

    let res = await editVacancyPost(body)
    if (res['success']) {
      toast.success(res['message'])
      setFormData({})
      navigate('/admin/vacancy-posts')
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
            name="company_name"
            required
            label="Company Name"
            onChange={handleChange}
            value={formData.company_name}
          />
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <FloatingLabelInput
            type="text"
            name="eligibility"
            required
            label="Elibility"
            onChange={handleChange}
            value={formData.eligibility}
          />
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <FloatingLabelInput
            type="text"
            name="position"
            required
            label="Position"
            onChange={handleChange}
            value={formData.position}
          />
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <FloatingLabelInput
            type="text"
            name="joining"
            required
            label="Joining"
            onChange={handleChange}
            value={formData.joining}
          />
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <FloatingLabelInput
            type="datetime-local"
            name="deadline"
            required
            min={new Date().toISOString().slice(0, -8)}
            label="Deadline"
            onChange={handleChange}
            value={formData.deadline}
          />
        </div>
        <div className="grid xl:grid-cols-2 xl:gap-6 my-5 items-center">
          <div>
            <h1>Current Image:</h1>
            <img
              src={`${process.env.REACT_APP_HOSTNAME}/static/${formData.image_path}`}
              alt={formData.company_name}
              className="h-48 w-48"
            />
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <FloatingLabelInput
              type="file"
              name="image"
              id="image"
              label="Logo"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  image: e.target.files[0],
                })
              }}
            />
          </div>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <FloatingLabelInput
            type="text"
            name="experience"
            required
            label="Experience"
            onChange={handleChange}
            value={formData.experience}
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
          Update
        </button>
      </form>
    </div>
  )
}

export default EditVacancyPost
