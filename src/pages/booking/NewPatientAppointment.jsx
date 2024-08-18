import React, {useState} from 'react'
import BookingNavbar from '../../layouts/BookingNavbar';
import Footer from '../../layouts/Footer';
import 'react-calendar/dist/Calendar.css'; // Import the calendar CSS
import staffData from '../../data/staffData';
import SmallAvatars from '../../components/ui/SmallAvatars';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import BookingCalendar from '../../components/ui/BookingCalendar';
import { FaArrowLeft, FaCalendar } from 'react-icons/fa';


const NewPatientAppoinment = () => {
    
    const [openCalendar, setOpenCalendar] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState('');
    const navigate = useNavigate();

    const handleCalendar = () => {
        console.log('clicked')
        setOpenCalendar(!openCalendar);
        console.log('calendar open')
    }

    const handleAppointmentChange = (e) => {
        setSelectedAppointment(e.target.value);
    }

    return (
        <main className='flex flex-col min-w-screen h-screen mt-28'>
            <BookingNavbar />
            <section className='flex flex-grow justify-between '>
                <article className='w-full flex flex-col  max-h-screen '>
                    {/* Adjusted Content Section for Centering */}
                    <div className="flex-1 flex flex-col justify-center relative px-48 py-28">
                        <button className="w-[6rem] absolute top-8 text-[1rem] app-title"
                            onClick={() => navigate(-1)} 
                        >
                            <FaArrowLeft className='app-title'/> Back
                        </button>
                        <div className="flex justify-between w-full mb-4">
                            <h2 className='text-indigo-900 text-xl md:text-3xl xl:text-4xl font-bold text-left w-[65%]'>
                                Select an Appointment
                            </h2>

                            
                        </div>
                      
                        <hr className='border-t-2 border-slate-300 w-[100%] my-6' />

                        <div className="flex justify-between w-full mb-4">
                                                 
                            <button
                                onClick={handleCalendar}
                                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md 
                                bg-spanishBlue px-12 text-xl uppercase font-semibold text-neutral-50">
                                <span className="absolute h-0 w-0 bg-blue-500 
                                    transition-all duration-300 group-hover:h-full group-hover:w-full"></span>
                                <span className="relative">Select Date <FaCalendar/></span>
                            </button>

                            <select id="appointment"
                                className="input w-80"
                                value={selectedAppointment} // Using the state
                                onChange={handleAppointmentChange} // Update the state based on user selection
                            >
                                <option value="">Select an Appointment</option>
                                <option value="new">New Patient</option>
                                <option value="existing">Existing Patient</option>
                                <option value="emergency">Emergency</option>
                            </select>
                        </div>                                                   
                            
                        <div className="absolute bottom-[42rem] z-50">
                            {openCalendar && (
                                        <Calendar
                                    onChange={handleAppointmentChange} // Corrected props for handling date change
                                    value={selectedAppointment} // Controlled component for selected date
                                />
                            )}
                        
                        </div>
                        
                        <div className="flex justify-end my-12">
                            <BookingCalendar/>                           
                        </div>
                        
                        {/* <hr className='border-t-2 border-slate-300 w-[100%] my-6' /> */}
                        
                        {staffData.filter(member => member.title !== 'Dental Assistant' && member.title !== 'Clinical Manager')
                            .map(member => {
                                return (
                                    <SmallAvatars
                                        key={member.id}
                                        imgSrc={member.imgSrc}
                                        name={member.name}
                                        title={member.title}
                                    />
                                );
                        })}
                    </div>                    

                    {/* Footer Section */}
                    <div className="">
                        <Footer/>
                    </div>
                </article>

            </section>
        </main>
    );
}

export default NewPatientAppoinment;
