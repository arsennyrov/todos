import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../MyButton'
import {AuthContext} from '../../../context'

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

    return (
      <div className='flex justify-between align-middle w-[100%] h-[5vh] bg-gray-300'>
          <div className='ml-2'>
            <MyButton onClick={logout}>
              Выйти
            </MyButton>
          </div>
          <div className='w-[35vw] flex justify-end leading-9 mr-7 text-blue-700'>
              <Link className='active: violet-500 text-[1rem]' to="/about">О сайте</Link>
              <Link className='active: violet-500 text-[1rem] ml-6' to="/posts">Посты</Link>
          </div>
      </div>
    );
};

export default Navbar;