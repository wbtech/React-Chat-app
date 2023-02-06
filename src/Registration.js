import React from "react";

import { auth } from "..firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

// const validatePassword = () => {
//     let isValid = true
//     if (password !== '' && confirmPassword !== ''){
//       if (password !== confirmPassword) {
//         isValid = false
//         setError('Passwords does not match')
//       }
//     }
//     return isValid
//   }

// const register = e => {
//   e.preventDefault()
//   setError('')
//   if(validatePassword()) {
//     // Create a new user with email and password using firebase
//       createUserWithEmailAndPassword(auth, email, password)
//       .then((res) => {
//           console.log(res.user)
//         })
//       .catch(err => setError(err.message))
//   }
//   setEmail('')
//   setPassword('')
//   setConfirmPassword('')
// }

const Login = () => {
  return (
    <div>
      <form>
        <div className='username'>
          <label className='form__label' for='firstName'>
            First Name{" "}
          </label>
          <input
            className='form__input'
            type='text'
            id='firstName'
            placeholder='First Name'
          />
        </div>
        <div className='lastname'>
          <label className='form__label' for='lastName'>
            Last Name{" "}
          </label>
          <input
            type='text'
            name=''
            id='lastName'
            className='form__input'
            placeholder='LastName'
          />
        </div>
        <div className='email'>
          <label className='form__label' for='email'>
            Email{" "}
          </label>
          <input
            type='email'
            id='email'
            className='form__input'
            placeholder='Email'
          />
        </div>
        <div className='password'>
          <label className='form__label' for='password'>
            Password{" "}
          </label>
          <input
            className='form__input'
            type='password'
            id='password'
            placeholder='Password'
          />
        </div>
        <div className='confirm-password'>
          <label className='form__label' for='confirmPassword'>
            Confirm Password{" "}
          </label>
          <input
            className='form__input'
            type='password'
            id='confirmPassword'
            placeholder='Confirm Password'
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
