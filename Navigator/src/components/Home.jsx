import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
    <header className="home-header">
      <h1>Welcome to Our Website</h1>
    </header>
    <main className="home-main">
      <p>This is the home page. Here you'll find the latest updates and news about our products and services.</p>
      <nav className="home-nav">
        <Link to="/product">View Products</Link>
        <Link to="/about">Learn About Us</Link>
        <Link to="/login">Login</Link>
      </nav>
    </main>
  </div>
  )
}

export default Home