import React, { useState } from 'react';
// import API from '../services/API';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserForm = () => {

const navigate = useNavigate();

const initialFormData = {
        name: '',
        email: '',
        phone: '',
        age: '',
        sex: '',
        address: '',
      }

  const [formData, setFormData] = useState(initialFormData);


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
   try {
    const  response = await axios.post(`${process.env.REACT_APP_BASEURL1}/users/user`, formData);

    // console.log((await response).data.user)     
    toast.success(response.data.message, {
      position: "top-center",
      theme: "colored"
      })

      navigate('/user-list');
    
   } catch (error) {
     console.log(error.message);
     toast.error(error.message, {
      position: "top-right",
      theme: "colored"
      })
      navigate('/');
   }
   resetForm();
  };

  // clears form after submission
  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <div className='form'>
      <h1>New User Form</h1>
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
            <label htmlFor="email">Email:</label>
            <input
            type="text"
            id="email"
            name="email"
            placeholder='Enter your email..'
            value={formData.email}
            onChange={handleChange}
            required
            />
         </div>

         <div className='inputs'>
            <label htmlFor="age">Age:</label>
            <input
            type="text"
            id="age"
            name="age"
            placeholder='Enter your age..'
            value={formData.age}
            onChange={handleChange}
            required
            />
         </div>

         <div className='inputs'>
            <label htmlFor="phone">Phone:</label>
            <input
            type="text"
            id="phone"
            name="phone"
            placeholder='Enter your phone number..'
            value={formData.phone}
            onChange={handleChange}
            required
            />
         </div>

         <div className='inputs'>
            <label htmlFor="sex">Sex:</label>
            <input
            type="text"
            id="sex"
            name="sex"
            placeholder='Enter your sex..'
            value={formData.sex}
            onChange={handleChange}
            required
            />
         </div>

         <div className='inputs'>
            <label htmlFor="address">Address:</label>
            <textarea
            type="text"
            id="address"
            name="address"
            placeholder='Enter your address..'
            value={formData.address}
            onChange={handleChange}
            required
            ></textarea>
         </div>

        <button type="submit">Submit</button>
        <button onClick={()=>navigate('/user-list')}>Users</button>
       
      </form>

    </div>
  );
};

export default UserForm;
