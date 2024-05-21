import React, { useEffect, useState } from 'react';
import './style.css';
import { getAppointments } from '../../../services/api';

const AppointmentList = () => {
    const [appointments, setAppointments] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const data = await getAppointments();
                setAppointments(data);
                setError(null);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchAppointments();
    }, []);

    return (
        <div className="appointment-list">
            <h3>Your Appointments</h3>
            {error && <p className="error-message">{error}</p>}
            {appointments.map((appointment) => (
                <div className="appointment-item" key={appointment.id}>
                    <p>{appointment.date}</p>
                    <p>{appointment.time}</p>
                </div>
            ))}
        </div>
    );
};

export default AppointmentList;
