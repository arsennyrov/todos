import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Posts from '../pages/Posts';
import { privateRoutes, publicRoutes } from '../router';
import Login from '../pages/Login';
import { AuthContext } from '../context';

const AppRouter = () => {
    const { isAuth } = useContext(AuthContext)
    console.log(isAuth);
    return (
        isAuth
        ?
        <div> 
            <Routes>
                {privateRoutes.map(route => 
                    <Route 
                        key={route.path}
                        path={route.path}
                        element={<route.element />}
                    />
                )}
                <Route path="*" element={<Posts />} />
            </Routes>
        </div>
        :
        <div> 
        <Routes>
            {publicRoutes.map(route => 
                <Route 
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                />
            )}
            <Route path="*" element={<Login />} />
        </Routes>
        </div>
    );
};

export default AppRouter;