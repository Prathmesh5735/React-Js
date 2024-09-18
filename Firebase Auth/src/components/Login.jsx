import React, { useState } from 'react';
import { auth, googleProvider } from '../service/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import GoogleButton from 'react-google-button';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Login.css';  // Assuming you create a CSS file for styling

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = async () => {
        if (email === '' || password === '') {
            alert('Please fill out all fields');
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            alert("User logged in successfully");
            localStorage.setItem('email', JSON.stringify(userCredential.user.email));
            navigate('/');
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                alert('No account found with this email. Please sign up first.');
            } else if (error.code === 'auth/wrong-password') {
                alert('Incorrect password. Please try again.');
            } else {
                alert('Error logging in: ' + error.message);
            }
        }
    };

    const googleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            alert('User logged in successfully with Google');
            localStorage.setItem('email', JSON.stringify(result.user.email));
            navigate('/');
        } catch (error) {
            console.error("Error logging in with Google:", error.message);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Login</h2>
                <div className='login-form'>
                    <input 
                        type="email" 
                        className="login-input" 
                        placeholder='Enter your email' 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        className="login-input" 
                        placeholder='Enter your password' 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button className="login-button" onClick={login}>Login</button>
                    <div className="signup-link-container">
                        <NavLink className="signup-link" to={'/signup'}>Don't have an account? Sign Up</NavLink>
                    </div>
                    <div className="google-login-container text-center">
                        <h5 className="google-login-title">Or login with</h5>
                        <GoogleButton onClick={googleLogin} className="google-button " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
