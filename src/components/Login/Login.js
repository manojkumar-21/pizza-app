import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import MainNav from '../Navbar/MainNav';

import './Login.css';

function Login() {
  const history = useNavigate();
  const [isValidEmail, setIsValidEmail] = useState(0)
  const [isValidPassword, setIsValidPassword] = useState(0)
  const [inputValues, setInputValues] = useState({
    email: "",
    password: ""
  })
  const [validation, setValidation] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    checkValidation();
  }, [inputValues])

  const checkValidation = () => {
    let errors = JSON.parse(JSON.stringify(validation));
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
    }
    else {
      errors.password = "";
    }

    setValidation(errors);
  };

  const onChangeHandler = (e) => {
    setInputValues(prevState => {
      return {
        ...inputValues, [e.target.name]: e.target.value
      }
    })
  }

  const validUser = async () => {
    const res = await axios.get("http://localhost:8888/register");
    const emailExist = res.data.filter((obj) => obj.email === inputValues.email)
    const passwordExist = res.data.filter((obj) => obj.password === inputValues.password)

    setIsValidEmail(prevState => { return { ...prevState, isValidEmail: emailExist.length } })
    setIsValidPassword(prevState => { return { ...prevState, isValidPassword: passwordExist.length } })

    if (isValidEmail && isValidPassword) {
      history("/menu")
    } else {
      alert("you have not not registered yet, please register before you login")
    }
  }

  const loginHandler = async (e) => {
    e.preventDefault()
    validUser()
  }

  return (
    <>
      <MainNav />
      <div>
        <h1 className='container mt-5'>Login</h1>
      </div>
      <div className='container m-5'>
        <form onSubmit={(e) => loginHandler(e)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
            <input type="email" name="email" className="form-control" id="exampleInputEmail" onChange={(e) => onChangeHandler(e)} required />
            {validation.email && <p>{validation.email}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
            <input type="password" name="password" className="form-control" id="exampleInputPhoneNo" onChange={(e) => onChangeHandler(e)} required />
            {validation.password && <p>{validation.password}</p>}
          </div>
          <button type="submit" className="btn btn-primary w-auto mt-3">Login</button>
        </form>
      </div>
    </>
  )
}
export default Login;