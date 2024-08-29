import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import OnlineBooking from "./pages/booking/OnlineBooking";
import NewPatientAppointment from "./pages/booking/NewPatientAppointment";
import ExistingPatientAppointment from "./pages/booking/ExistingPatientAppointment";
import EmergencyAppointment from "./pages/booking/EmergencyAppointment";
import BookAppointment from "./pages/booking/BookAppointment";
import NotFoundPage from "./pages/404/NotFoundPage";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
					<Route index element={<Home />} />					
				</Route>

				<Route path='/book' element={<OnlineBooking/>} />
				<Route path='/new-patient-appointment' element={<NewPatientAppointment/>} />
				<Route path='/existing-patient-appointment' element={<ExistingPatientAppointment/>} />
				<Route path='/emergency-appointment' element={<EmergencyAppointment/>} />
                <Route path='/book-appointment' element={<BookAppointment />} />
                
                 <Route path="*" element={<NotFoundPage />} />
            </Routes>

        </Router>
    </React.StrictMode>
)