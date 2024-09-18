import React from "react";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { auth, provider } from "../Firebase/Firebase";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        navigate('/product');  // Redirect to the product page after successful login
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome Back!</h1>
        <p style={styles.subtitle}>Sign in to continue to your account</p>
        <GoogleButton
          onClick={handleLogin}
          style={styles.googleButton}
          label="Sign in with Google"
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
    backgroundImage:
      "url(https://www.transparenttextures.com/patterns/shattered-dark.png)", // Subtle background pattern
  },
  card: {
    padding: "50px",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
  },
  title: {
    fontSize: "2.5em",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  subtitle: {
    fontSize: "1.2em",
    color: "#555",
    marginBottom: "40px",
  },
  googleButton: {
    width: "100%",
    height: "50px",
    fontSize: "1.1em",
  },
};

export default Login;
