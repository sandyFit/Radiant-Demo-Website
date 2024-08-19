import React from 'react';
import BookingNavbar from '../../layouts/BookingNavbar';
import Footer from '../../layouts/Footer';
import { useNavigate } from 'react-router-dom';
import BookingContactCard from '../../components/cards/BookingContactCard';

const OnlineBooking = () => {
    const navigate = useNavigate();

    return (
        <main className='flex flex-col mt-24'>
            <BookingNavbar />
            <section className='flex flex-col '>
                
                <section className='w-full'>
                    <div className="w-full flex flex-col relative px-36 mt-12 pb-[8rem]">
                        <h2 className='text-indigo-900 text-xl md:text-3xl xl:text-4xl font-bold text-center
                            w-full mt-12'>
                            What Type of
                            <span className='app-title ml-3'>Appointment </span>
                             Would You Like to Schedule?
                        </h2>
                        <div className="flex flex-col items-center mt-6">
                            <button className="booking-btn " onClick={() => navigate('/new-patient-appointment')}>
                                New Patient
                            </button>
                            <button className="booking-btn" onClick={() => navigate('/existing-patient-appointment')}>
                                Existing Patient
                            </button>
                            <button className="booking-btn" onClick={() => navigate('/emergency')}>
                                Emergency/Toothache
                            </button>
                        </div>
                    </div>
                    
                </section>

                <section>
                    <img src="/map-bn.jpg" alt="" />
                </section>

                <Footer/>
                
            </section>
        </main>
    );
}

export default OnlineBooking;
