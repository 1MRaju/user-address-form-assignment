import React, { useEffect, useState } from 'react';
// import API from '../services/API';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useId } from '../contexts/idContext';

const UpdateUser = () => {
 const {selectedId} = useId();
 const navigate = useNavigate();

 console.log(selectedId);

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

  const handleUpdate = async (e) => {
    e.preventDefault();
    //used this function to manage both post API's
   try {
    const  response = await axios.put(`${process.env.REACT_APP_BASEURL1}/users/update-user/${selectedId}`, formData);

    // console.log((await response).data.user)     
    toast.success(response.data.message, {
      position: "top-center",
      theme: "colored"
      })
    
   } catch (error) {
     console.log(error.message);
     toast.error(error.message, {
      position: "top-right",
      theme: "colored"
      })
   }
   resetForm();
  };

  const editUser = async (userId) => {
    await userId;
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASEURL1}/users/get-user/${userId}`);
      console.log(response.data.user);
      const {name,email,phone,age,sex,address,} = response.data.user;
      setFormData({name,email,phone,age,sex,address});
    } catch (error) {
      console.log(error);
    }
  }

  // clears form after submission
  const resetForm = () => {
    setFormData(initialFormData);
  };

  useEffect(()=>{
    editUser(selectedId);
  },[selectedId])

  return (
    <div className='form'>
      <h1>User Update Form</h1>
      <form onSubmit={handleUpdate} >
        <div className='inputs'>
            <label htmlFor="name">Name:</label>
            <input
            type="text"
            id="name"
            name="name"
            placeholder='Edit your name'
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
            placeholder='Edit your email..'
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
            placeholder='Edit your age..'
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
            placeholder='Edit your phone number..'
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
            placeholder='Edit your sex..'
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
            placeholder='Edit your address..'
            value={formData.address}
            onChange={handleChange}
            required
            ></textarea>
         </div>

        <button type="submit">Update</button>
        <button onClick={()=>navigate('/user-list')}>Users</button>
       
      </form>

    </div>
  );
};

export default UpdateUser;
