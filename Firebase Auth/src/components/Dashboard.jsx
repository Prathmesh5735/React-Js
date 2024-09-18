import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Product.css'; // Importing an external CSS file

const Dashboard = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="product-container">
            <h1 className="product-title">Our Products</h1>
            <div className="product-grid">
                {data.map((el) => (
                    <div key={el.id} className="product-card">
                        <img src={el.image} alt={el.title} className="product-image" />
                        <h2 className="product-name">{el.title}</h2>
                        <p className="product-price">${el.price}</p>
                        <p className="product-description">{el.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
