import React from 'react';
import { Link } from 'react-router-dom';
// import { auth } from '../Firebase/Firebase';
import { signOut } from 'firebase/auth';
import { auth } from '../service/firebase';

const Navbar = () => {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("You have been logged out.");
      })
      .catch((err) => { 
        console.log(err); 
      });
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>MyApp</div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/product" style={styles.link}>Dashboard</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/signup" style={styles.link}>Sign Up</Link>
        <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1em',
    padding: '8px 12px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  linkHover: {
    backgroundColor: '#0056b3',
  },
  logoutButton: {
    padding: '8px 16px',
    fontSize: '1em',
    color: '#007BFF',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  logoutButtonHover: {
    backgroundColor: '#e0e0e0',
  },
};

export default Navbar;
