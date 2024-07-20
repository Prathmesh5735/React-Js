// Product.js
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ThemeContext } from '../Context/ThemeContext';

const Product = () => {
  const [data, setData] = useState([]);
  const { theme } = useContext(ThemeContext);

  const fetchData = () => {
    axios("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='products' style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)'}}>
      {data.map((el) => (
        <div key={el.id} className={`card ${theme}`} style={{ width: "18rem" }}>
          <img src={el.image} className="card-img-top" alt={el.title} width={200} height={200} />
          <div className="card-body">
            <h2 className="card-title">{el.title}</h2>
            <h3 className="card-price">${el.price}</h3>
            <h4 className="card-category">{el.category}</h4>
            <p className="card-text">{el.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
