
import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../styles/login.css';
import registerImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

const Register = () => {
   const [credentials, setCredentials] = useState({
      username: "",
      email: "",
      password: ""
   });

   const [passwordVisible, setPasswordVisible] = useState(false);
   const { dispatch } = useContext(AuthContext);
   const navigate = useNavigate();

   const handleChange = (e) => {
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
   };

   const validatePassword = (password) => {
      const minLength = 8;
      const hasNumber = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      return password.length >= minLength && hasNumber && hasSpecialChar;
   };

   const handleClick = async (e) => {
      e.preventDefault();

      if (!validatePassword(credentials.password)) {
         alert("Password must be at least 8 characters long, contain a number and a special character.");
         return;
      }

      try {
         const res = await fetch(`${BASE_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
         });

         const result = await res.json();
         if (!res.ok) {
            alert(result.message);
         } else {
            dispatch({ type: 'REGISTER_SUCCESS' });
            navigate('/login');
         }
      } catch (err) {
         alert("Registration failed. Please try again.");
      }
   };

   return (
      <section>
         <Container>
            <Row>
               <Col lg="8" className="m-auto">
                  <div className="login__container d-flex justify-content-between">
                     <div className="login__img">
                        <img src={registerImg} alt="Register" />
                     </div>

                     <div className="login__form">
                        <div className="user">
                           <img src={userIcon} alt="User Icon" />
                        </div>
                        <h2>Register</h2>

                        <Form onSubmit={handleClick}>
                           <FormGroup>
                              <input type="text" placeholder="Username" id="username" onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="email" placeholder="Email" id="email" onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup className="password-input">
                              <input
                                 type={passwordVisible ? "text" : "password"}
                                 placeholder="Password"
                                 id="password"
                                 onChange={handleChange}
                                 required
                              />
                              <span className="password-toggle" onClick={() => setPasswordVisible(!passwordVisible)}>
                                 {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                              </span>
                           </FormGroup>
                           <Button className="btn secondary__btn auth__btn" type="submit">
                              Create Account
                           </Button>
                        </Form>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   );
};

export default Register;
