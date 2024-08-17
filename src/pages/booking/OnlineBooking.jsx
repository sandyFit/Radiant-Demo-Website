import React from 'react';
import BookingNavbar from '../../layouts/BookingNavbar';
import BookingFooter from '../../layouts/BookingFooter';
import { useNavigate } from 'react-router-dom';
import BookingContactCard from '../../components/cards/BookingContactCard';

const OnlineBooking = () => {
    const navigate = useNavigate();

    return (
        <main className='flex flex-col h-screen'>
            <BookingNavbar />
            <section className='flex flex-grow overflow-hidden'>
                {/* Left Article: Scrollable Content */}
                <article className='w-3/4 overflow-auto'>
                    <div className="flex flex-col justify-center relative px-36 mt-12 pb-[8rem]">
                        <hr className='border-t-2 border-slate-300 w-full my-6' />
                        <div> {/* This is the parent flex container */}
                            <BookingContactCard />
                        </div>
                        <hr className='border-t-2 border-slate-300 w-full my-6' />
                        <h2 className='text-spaceCadet text-xl md:text-3xl xl:text-4xl font-bold text-left w-full mt-12'>
                            What Type of Appointment Would You Like to Schedule?
                        </h2>
                        <div className="space-y-4 mt-4">
                            <button className="booking-btn" onClick={() => navigate('/new-patient-appointment')}>
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
                    <BookingFooter />
                </article>

                {/* Right Article: Fixed Content */}
                <article className='overflow-hidden'>
                    <img src="/map.jpg" alt="Radiant Google Map" className='w-full h-screen object-cover' />
                </article>
            </section>
        </main>
    );
}

export default OnlineBooking;
