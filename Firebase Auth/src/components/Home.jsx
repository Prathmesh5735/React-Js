import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Our Awesome Home Page!</h1>
      <p style={styles.subtitle}>
        Discover the latest updates, explore our features, and enjoy a seamless experience.
      </p>
      <div style={styles.buttonContainer}>
        <button style={styles.button}><Link style={{textDecoration:'none',color:'white'}} to={"/product"}>Product</Link></button>
        <button style={styles.button}><Link style={{textDecoration:'none',color:'white'}} to={"/login"}>Login</Link></button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f4f4f4',
    color: '#333',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '50px auto',
  },
  title: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '1.2em',
    marginBottom: '40px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Home;
