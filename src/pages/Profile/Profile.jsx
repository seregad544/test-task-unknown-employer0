import { React } from 'react';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../store/userSlice'

function Profile() {
  const UserName = useSelector(selectUserName);
  return (
      <div className='profile'>
        <img src='https://i.pinimg.com/736x/6b/da/0d/6bda0dbd19fafad0c56a0e58265ccb94.jpg' alt='avatar'/>
        <h1 className='name'>{UserName}</h1>
        <div className='info'>
          <p className='title'>Email Address:</p>
          <p>email@gmail.com</p>
          <hr color="#9298A3"/> 
          <p className='title'>Phone Number:</p>
          <p>+8 (900) 999 99 99</p>
        </div>
      </div>  
  );
}
  
export default Profile;
  