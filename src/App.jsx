import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import PrivateRoute from './components/PrivateRoutes';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/appointments" component={<DashboardPage />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

/* const PrivateRoute = ({ element: Element }) => {
    const { user } = React.useContext(AuthContext);
    return user ? Element : <Navigate to="/login" />;
}; */

export default App;
