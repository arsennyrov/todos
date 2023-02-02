import React, { useContext } from 'react';
import MyButton from '../components/UI/MyButton';
import MyInput from '../components/UI/MyInput';
import { AuthContext } from '../context';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = nativeEvent => {
        nativeEvent.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', true)
    }

    return (
        <div className='w-[30%] mx-auto my-5'>
            <h1>Страница для логина</h1>    
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Введите пароль" />
                <MyInput type="password" placeholder="Введите логин" />
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;