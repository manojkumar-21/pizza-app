import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import MainNav from '../Navbar/MainNav';

function Signup() {
  let history = useNavigate(); 

  const [validation, setValidation] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  const [inputValues, setInputValues] = useState ( {
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
    
  useEffect(() => {
    checkValidation();
  },[inputValues])

  const onSubmitHandler = async (e) => {
    e.preventDefault() 
    await axios.post("http://localhost:8888/register", inputValues);
    history("/menu")
  }
  
  const onChangeHandler = (e) => {
    setInputValues(prevState => {
      return {
        ...inputValues,[e.target.name]: e.target.value
      }
    })
  } 

  const checkValidation = () => {
    let errors = JSON.parse(JSON.stringify(validation));

    //first Name validation
    if (!inputValues.fName.trim()) {
      errors.fName = "First name is required";
    } else {
      errors.fName = "";
    }

    //last Name validation
    if (!inputValues.lName.trim()) {
      errors.lName = "Last name is required";
    } else {
      errors.lName = "";
    }

    // email validation
    if (!inputValues.email.trim()) {
      errors.email = "Email is required";
    } 
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputValues.email)) {
      errors.email = "Please enter a valid email address";
    } else {
      errors.email = "";
    }

    //password validation    
    const password = inputValues.password;
    if (!password) {
      errors.password = "password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be longer than 6 characters";
    } else if (password.length >= 20) {
      errors.password = "Password must shorter than 20 characters";
    } else if (!/^(?=.*[a-z]).{6,20}$/.test(password)) {
      errors.password = "Password must contain at least one lowercase";
    } else if (!/^(?=.*[A-Z]).{6,20}$/.test(password)) {
      errors.password = "Password must contain at least one capital letter";
    } else if (!/^(?=.*[0-9]).{6,20}$/.test(password)) {
      errors.password = "Password must contain at least a number";
    } else {
      errors.password = "";
    }

    //matchPassword validation
    console.log(inputValues.confirmPassword,inputValues.password)
    if (!inputValues.confirmPassword) {
      errors.confirmPassword = "Password confirmation is required";
    } else if (inputValues.confirmPassword !== inputValues.password) {
      errors.confirmPassword = "Password does not match confirmation password";
    } else {
      errors.confirmPassword = "";
    }

    setValidation(errors);
  };
  return (
    <div>
      <MainNav />
      <section className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card rounded" >
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                      <form id="registrationForm"
                        onSubmit={(e)=>onSubmitHandler(e)}>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example1cg">First Name</label>
                          <input type="text"
                            id="form3Example1cg"
                            name="fName"
                            className="form-control form-control-lg"
                            onChange={(e) => onChangeHandler(e)}
                            defaultValue={inputValues.fName}
                            required />
                          {validation.fName && <p>{validation.fName}</p>}
                        </div>
                            
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example1cg">Last Name</label>
                          <input 
                            type="text"
                            id="fName" 
                            name="lName" 
                            className="form-control form-control-lg" 
                            onChange={(e)=>onChangeHandler(e)}  
                            required />
                            {validation.lName && <p>{validation.lName}</p>}
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                          <input
                            type="email"
                            id="form3Example3cg"
                            name="email" 
                            className="form-control form-control-lg" 
                            onChange={(e) => onChangeHandler(e)} 
                            required />
                          {validation.email && <p>{validation.email}</p>}
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example4cg">Password</label>
                          <input
                            type="password"
                            id="form3Example4cg"
                            name="password"
                            className="form-control form-control-lg"
                            onChange={(e) => onChangeHandler(e)}
                            required />
                          {validation.password && <p>{validation.password}</p>}
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example4cdg">Confirm Password</label>
                          <input 
                            type="password" 
                            id="form3Example4cdg" 
                            name="confirmPassword" 
                            className="form-control form-control-lg" 
                            onChange={(e) => onChangeHandler(e)}
                            required />
                          {validation.confirmPassword && <p>{validation.confirmPassword}</p>}
                        </div>
                      
                        <button className='btn btn-primary' type="submit" id="submit-button">Signup </button>
                        <p className="text-center text-muted mt-5 mb-0">Have already an account? 
                        <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link></p>
                      </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup