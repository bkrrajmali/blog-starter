import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const NavBar = () => {
    const { user, logout } = useAuth();
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <div className="container mx-auto flex justify-between">
                <Link to="/" className="text-xl font-bold">Blog</Link>
                <div>
                    {user ? (
                        <>
                            <span className="mr-4">Hello</span>
                            <button onClick={logout} className="text-gray-300 hover:text-white">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="mr-4 text-gray-300 hover:text-white">Login</Link>
                            <Link to="/register" className="text-gray-300 hover:text-white">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

const App = () => {
    return (
        <AuthProvider>
            <div className="min-h-screen bg-gray-50">
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </AuthProvider>
    );
};

export default App;
