import React, { useState } from 'react';
import API from '../services/API';

const UserForm = () => {

const initialFormData = {
        name: '',
        address: '',
      }

  const [formData, setFormData] = useState(initialFormData);

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //used this function to manage both post API's
    const submitFormData = async (endpoint, successMsg, errorMsg) => {
        try {
            const response = await API.post(endpoint, formData);
            // console.log('API Response:', response.data);
            if(response.data.message) {
                setMessage(successMsg);
                setTimeout(()=>{
                    setMessage(" ");
                },2000)
            } else {
                setMessage(errorMsg);
                setTimeout(()=>{
                    setMessage(" ");
                },2000)
            }
          } catch (error) {
            setMessage(`An error occurred while submitting ${errorMsg}. Please try again later.`);
            setTimeout(()=>{
                setMessage(" ");
            },2000)
          }
    }
   await submitFormData('/user/user1',' ', 'The user name.' );
   await submitFormData('/address/address1','User name & address submitted successfully.', 'The user address.' );
   resetForm();
  };

  // clears form after submission
  const resetForm = () => {
    setFormData(initialFormData);
  };

  

  return (
    <div className='form'>
      <h1>User Address Form</h1>
      <form onSubmit={handleSubmit} >
        <div className='inputs'>
            <label htmlFor="name">Name:</label>
            <input
            type="text"
            id="name"
            name="name"
            placeholder='Enter your name'
            value={formData.name}
            onChange={handleChange}
            required
            />
        </div>
         <div className='inputs'>
            <label htmlFor="address">Address:</label>
            <input
            type="text"
            id="address"
            name="address"
            placeholder='Enter your address..'
            value={formData.address}
            onChange={handleChange}
            required
            />
         </div>

        <button type="submit">Submit</button>

      {/* shows all the success and error messages */}
        <div id="message">{message}</div>
      </form>

    </div>
  );
};

export default UserForm;
