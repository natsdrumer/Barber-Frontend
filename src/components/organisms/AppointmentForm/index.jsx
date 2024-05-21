import React, { useState } from 'react';
import './style.css';
import FormField from '../../molecules/FormField';
import Button from '../../atoms/Button';
import { createAppointment } from '../../../services/api';

const AppointmentForm = ({ onSuccess }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createAppointment(date, time);
            setError(null);
            onSuccess();
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <form className="appointment-form" onSubmit={handleSubmit}>
            <FormField label="Date" type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <FormField label="Time" type="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} />
            {error && <p className="error-message">{error}</p>}
            <Button type="submit">Create Appointment</Button>
        </form>
    );
};

export default AppointmentForm;
