import axios from 'axios';
import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useState, useRef } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { db } from '../service/firebase';
// import { db } from '../service/firebase';
const AddProduct = () => {
  const focusref = useRef();
  const navigate=useNavigate()
  const [userData, setUserData] = useState({
    image: '',
    title: '',
    price: 0,
    category: '',
    description: ''
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(userData)
    try {
        const res = await addDoc(collection(db, "Product"), userData)
        console.log(res)
        alert("Product Added...")
    } catch (err) {
        console.log(err)
    }
}

  function handleInput(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }
  useEffect(() => {
    focusref.current.focus();
  }, []); 
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
      <form className='w-25 border text-center editForm pt-2' onSubmit={handleSubmit}>
        <label>
          Product Image:
          <Form.Control type="text" name="image" placeholder='enter your product image url' onChange={handleInput} ref={focusref} />
        </label><br />
        <label>
          Product Title:
          <Form.Control type="text" name="title" placeholder='enter your product title' onChange={handleInput} />
        </label><br />
        <label>
          Price:
          <Form.Control type="number" name="price" placeholder='enter your product price' onChange={handleInput} />
        </label><br />
        <label>
          Category:
          <Form.Control type="text" name="category" placeholder='enter your product category' onChange={handleInput} />
        </label><br />
        <label>
          Description:
          <Form.Control type="text" name="description" placeholder='enter your product description' onChange={handleInput} />
        </label><br />
        <button type="submit" className='btn btn-primary'>Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct