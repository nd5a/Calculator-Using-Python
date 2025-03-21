
import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";
import userIcon from '../assets/images/user.png';
import registerImg from '../assets/images/login.png';
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const Login = () => {
   const [credentials, setCredentials] = useState({ email: "", password: "" });
   const [errors, setErrors] = useState({ email: "", password: "" });
   const [showPassword, setShowPassword] = useState(false); // State for toggling password view

   const { dispatch } = useContext(AuthContext);
   const navigate = useNavigate();

   // Handle input change
   const handleChange = (e) => {
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
   };

   // Password validation function
   const isValidPassword = (password) => {
      const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/; // Special character check
      const numberRegex = /[0-9]/; // Number check
      return specialCharRegex.test(password) && numberRegex.test(password);
   };

   const handleClick = async (e) => {
      e.preventDefault();

      let newErrors = {};
      if (!credentials.email) newErrors.email = "Email is required";
      if (!credentials.password) {
         newErrors.password = "Password is required";
      } else if (!isValidPassword(credentials.password)) {
         newErrors.password = "Password must contain at least one number and one special character";
      }

      if (Object.keys(newErrors).length > 0) {
         setErrors(newErrors);
         return; // Stop execution if validation fails
      }

      dispatch({ type: "LOGIN_START" });

      try {
         const res = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
         });

         const result = await res.json();
         if (!res.ok) {
            dispatch({ type: "LOGIN_FAILURE", payload: result.message });
            setErrors({ general: result.message });
         } else {
            dispatch({ type: "LOGIN_SUCCESS", payload: result.user });
            navigate("/");
         }
      } catch (err) {
         setErrors({ general: "Login failed" });
      }
   };

   return (
      <section>
         <Container>
            <Row>
               <Col lg="8" className="m-auto">
               <div className="login__container d-flex justify-content-between">
                  <div className="login__img">
                        <img src={registerImg} alt="Login" />
                  </div>

                     <div className="login__form">
                        <div className="user">
                              <img src={userIcon} alt="User Icon" />
                        </div>
                        <h2>Login</h2>

                     <Form onSubmit={handleClick}>
                        <FormGroup>
                           <input
                              type="email"
                              placeholder="Email"
                              id="email"
                              onChange={handleChange}
                              required
                           />
                           {errors.email && <p className="error">{errors.email}</p>}
                        </FormGroup>

                        {/* Password Input with Toggle Button */}
                        <FormGroup className="password-field">
                           <input
                              type={showPassword ? "text" : "password"} // Toggle input type
                              placeholder="Password"
                              id="password"
                              onChange={handleChange}
                              required
                           />
                           {/* Eye Button for Show/Hide Password */}
                           <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                              {showPassword ? <FaEyeSlash /> : <FaEye />}
                           </span>
                           {errors.password && <p className="error">{errors.password}</p>}
                        </FormGroup>

                        {errors.general && <p className="error">{errors.general}</p>}

                        <Button type="submit">Login</Button>
                     </Form>
                     <p>Don't have an account? <Link to="/register">Create</Link></p>
                  </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   );
};

export default Login;
