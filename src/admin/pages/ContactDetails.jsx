import React, { useEffect, useState } from 'react';
import { getContactDetails, updateContactDetails } from '../api/common';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FloatingLabelInput from '../shared/FloatingLabelInput';
import { ImLocation2 } from 'react-icons/im';
import { IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { data } from 'autoprefixer';
import { toast } from 'react-toastify';

const ContactDetails = () => {
  const [formData, setFormData] = useState({});
  const [content, setContent] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);
  const [currentData, setCurrentData] = useState({});
  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await getContactDetails();
      if (response['success']) {
        let data = response['data'];
        setCurrentData({ ...data });
        delete data['_id'];
        setContent(data['address']);
        delete data['address'];
        setFormData({ ...data });
      } else {
        console.log(response);
      }
    };
    fetchData();
  }, [isUpdated]);
  const handleSubmit = async e => {
    e.preventDefault();
    const body = new FormData();
    body.set('address', content);
    body.set('gen_secretary_name', formData.gen_secretary_name);
    body.set('gen_secretary_number', formData.gen_secretary_number);
    body.set('asst_gen_secretary_name', formData.asst_gen_secretary_name);
    body.set('asst_gen_secretary_number', formData.asst_gen_secretary_number);
    body.set('email', formData.email);
    let res = await updateContactDetails(body);
    if (res['success']) {
      toast.success(res['message']);
      setIsUpdated(true);
    } else {
      toast.error(res['message']);
    }
  };
  return (
    <div className="flex-grow p-5 list-decimal">
      <form className="w-full 2xl:w-2/3 mx-auto mt-5 shadow-lg p-5" onSubmit={handleSubmit}>
        <div className="relative z-0 mb-6 w-full group">
          {/* <FloatingLabelInput
            type="textarea"
            name="address"
            required
            label="Complete Address"
            onChange={handleChange}
            value={formData.address}
          /> */}
          <CKEditor
            config={{
              toolbar: {
                items: ['heading', '|', 'bold', 'italic'],
              },
            }}
            editor={ClassicEditor}
            data={content}
            onReady={editor => {
              console.log('Editor is ready to use!');
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log(data);
              setContent(data);
            }}
            // onBlur={(event, editor) => {
            //   console.log('Blur.', editor)
            // }}
            // onFocus={(event, editor) => {
            //   console.log('Focus.', editor)
            // }}
          />
        </div>
        <div className="grid xl:grid-cols-2 xl:gap-6 my-5 items-center">
          <div className="relative z-0 mb-6 w-full group">
            <FloatingLabelInput
              type="text"
              name="gen_secretary_name"
              required
              label="General Secretary Name"
              onChange={handleChange}
              value={formData.gen_secretary_name}
            />
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <FloatingLabelInput
              type="text"
              name="gen_secretary_number"
              required
              label="General Secretary Number"
              onChange={handleChange}
              value={formData.gen_secretary_number}
            />
          </div>
        </div>
        <div className="grid xl:grid-cols-2 xl:gap-6 my-5 items-center">
          <div className="relative z-0 mb-6 w-full group">
            <FloatingLabelInput
              type="text"
              name="asst_gen_secretary_name"
              required
              label="Assistant General Secretary Name"
              onChange={handleChange}
              value={formData.asst_gen_secretary_name}
            />
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <FloatingLabelInput
              type="text"
              name="asst_gen_secretary_number"
              required
              label="Assistant General Secretary Number"
              onChange={handleChange}
              value={formData.asst_gen_secretary_number}
            />
          </div>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <FloatingLabelInput
            type="text"
            name="email"
            required
            label="Email Address"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update
        </button>
      </form>
      <div className="p-8 max-w-sm">
        <h1 className="text-lg">Current details:</h1>
        <div className="flex flex-col text-sm space-y-4 my-5">
          <div className="flex flex-row">
            <ImLocation2 className="text-sm m-1 ml-0 mr-2" />
            <p className="" dangerouslySetInnerHTML={{ __html: currentData.address }}></p>
          </div>
          <div className="flex flex-row">
            <IoCall className="text-sm m-1 ml-0 mr-2" />
            <p>
              {currentData.gen_secretary_name} ({currentData.gen_secretary_number})
              <br />
              General Secretary
            </p>
          </div>
          <div className="flex flex-row">
            <IoCall className="text-sm m-1 ml-0 mr-2" />
            <p>
              {currentData.asst_gen_secretary_name} ({currentData.asst_gen_secretary_number})
              <br />
              Assistant General Secretary
            </p>
          </div>
          <div className="flex flex-row">
            <MdEmail className="text-sm m-1 ml-0 mr-2" />
            <p>{currentData.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
