import { React, useState } from 'react';
  import { useNavigate } from "react-router-dom";
  import { useDispatch } from 'react-redux';
  import { authorization } from '../../store/userSlice.js';

  function Login() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [formValid, setFormValid] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const redirectToProfile = () => navigate(`/profile`);

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(authorization());
      redirectToProfile();
    };
    
    const handleChange = (e) => {
      if (e.target.name === 'login') {
        setLogin(e.target.value);
        setFormValid(e.target.value === "developer21" && password === "123456");
      } else {
        setPassword(e.target.value);
        setFormValid(login === "developer21" && e.target.value === "123456");
      }
    };

    return (
        <form onSubmit={handleSubmit}>
          <h2 className='my-10'>Login</h2>
          <div className='w-100'>
            <label htmlFor='login'/>
            <input type='text' id='login' name='login' value={login} onChange={handleChange} placeholder='Login' />
          </div>
          <div className='w-100'>
            <label></label>
            <input type='text' id='password' name='password' value={password} onChange={handleChange} placeholder='Password' />
          </div>
          <button disabled={ !formValid }>login</button>
        </form>  
    );
  }
  
  export default Login;
    