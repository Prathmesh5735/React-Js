import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../service/firebase';
import '../SignUp.css';  // Assuming you create a CSS file for styling

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const signUp = async () => {
        if (name === '' || email === '' || password === '') {
            alert('Please fill out all fields');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            alert('User signed up successfully');
            localStorage.setItem('email', JSON.stringify(userCredential.user.email));
            navigate('/');
        } catch (error) {
            console.error("Error signing up: ", error.message);
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
        <div className="signup-container">
            <div className="signup-card">
                <h3 className="signup-title">Sign Up</h3>
                <div className='signup-form'>
                    <input 
                        type="text" 
                        className="signup-input" 
                        placeholder='Enter your name' 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    /> 
                    <input 
                        type="email" 
                        className="signup-input" 
                        placeholder='Enter your email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    /> 
                    <input 
                        type="password" 
                        className="signup-input" 
                        placeholder='Enter your password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button className="signup-button" onClick={signUp}>Sign Up</button>
                    <div className="login-link-container">
                        <NavLink className="login-link" to={'/login'}>Already have an account? Login</NavLink>
                    </div>
                    <div className="google-login-container">
                        <h5 className="google-login-title">Or sign up with</h5>
                        <GoogleButton onClick={googleLogin} className="google-button" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
