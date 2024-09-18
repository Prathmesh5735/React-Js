import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Product = () => {
  const [data,setdata]=useState([])

  const fetchdata =()=>{
    axios("https://fakestoreapi.com/products")
    .then((res)=>{
      console.log(res.data)
      setdata(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <div className='products'>
      {data.map((el)=>(
        <div key={el.id} className="main" style={{width: "18rem"}}>
          <img src={el.image} className="img" alt="..."/>
          <h2 className="title">{el.title}</h2>
          <h3 className="price">{el.price}</h3>
          <h4 className="category">{el.category}</h4>
          <p className="description">{el.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Product