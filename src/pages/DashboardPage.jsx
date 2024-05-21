import React, { useContext } from 'react';
import './styles/DashboardPage.css';
import AuthContext from '../context/AuthContext';
import AppointmentForm from '../components/organisms/AppointmentForm';
import AppointmentList from '../components/organisms/AppointmentList';

const DashboardPage = () => {
    const { user, logout } = useContext(AuthContext);

    const handleAppointmentSuccess = () => {
        
    };

    return (
        <div className="dashboard-page">
            <h1>Dashboard</h1>
            <h2>Welcome, {user?.name}</h2>
            <button className="logout-button" onClick={logout}>Logout</button>
            <AppointmentForm onSuccess={handleAppointmentSuccess} />
            <AppointmentList />
        </div>
    );
}


export default DashboardPage;