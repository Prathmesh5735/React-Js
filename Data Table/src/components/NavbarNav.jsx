import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
const NavbarNav = () => {
  const auth=localStorage.getItem('token');
  return (
    <div>
        <Navbar bg="secondary" data-bs-theme="secondary">
        <Container>
          <Nav className="ms-auto w-100 d-flex justify-content-between">
            <NavLink style={({isActive})=>{
              return{color:isActive ?'red':'white'}
            }} to={"/"}>Home</NavLink>
            <NavLink style={({isActive})=>{
              return{color:isActive ?'red':'white'}
            }} to="/products">Products</NavLink>
            <NavLink style={({isActive})=>{
              return{color:isActive ?'red':'white'}
            }} to="/addProduct">Add Product</NavLink>
            <NavLink style={({isActive})=>{
              return{color:isActive ?'red':'white'}
            }} to="/login">Login</NavLink>
          </Nav> 
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarNav