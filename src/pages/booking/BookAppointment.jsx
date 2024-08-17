import React from 'react'
import BookingNavbar from '../../layouts/BookingNavbar'
import Footer from '../../layouts/Footer';
import { FaArrowLeft } from 'react-icons/fa';

const BookAppointment = () => {
    return (
        <main className="flex flex-col min-h-screen bg-gray-100">
            <BookingNavbar />
            
            {/* Main content wrapper for centering */}
            <div className="flex-grow flex flex-col items-center justify-center">
                <section className="pt-12 pb-36 w-3/5 space-y-12">
                    <button className="absolute text-lg font-medium text-blue-400"
                            onClick={() => navigate(-1)} 
                        >
                        <FaArrowLeft /> Back
                    </button>
                    <div className="flex flex-col">
                        <h3 className="text-spaceCadet text-2xl font-bold mt-6">
                            Appointment Request
                        </h3>
                        <hr className="border-t-2 border-slate-300 w-full my-6" />
                        <p className="text-lg">
                            Please provide accurate details for a smooth booking. Upon submission, we'll confirm your
                            slot via email, including visit tips. Don't hesitate to mention any special needs.
                            Thanks for choosing us.
                        </p>
                    </div>

                    <div className="flex justify-center items-center flex-grow w-full border-2 
                        border-slate-300 rounded-md pb-16">
                        <article className="space-y-6 mt-12 w-full max-w-4xl">
                            {/* Form and its inputs go here */}
                        
                        <form className="space-y-6">
                            <div className="flex flex-col items-center space-y-6">
                                {/* Name input */}
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="text-lg font-semibold">Patient Full Name</label>
                                    <input type="text" name="name" className="input w-[30rem] rounded-md" required />
                                </div>

                                
                            {/* Age input */}  
                                <div className="flex flex-col">
                                    <label htmlFor="age" className="text-lg font-semibold">Patient Birth Date (mm/dd/yyyy)</label>
                                    <input type="text" name="age" className="input w-[30rem] rounded-md" required />
                                </div>
                                
                                {/* Email input */}
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-lg font-semibold">Email</label>
                                    <input type="email" placeholder="john@doe.com" name="email" className="input w-[30rem] rounded-md" required />
                                </div>

                                {/* Phone Number input */}
                                <div className="flex flex-col">
                                    <label htmlFor="text" className="text-lg font-semibold">Phone Number</label>
                                    <input type="text" placeholder="(000) 000-0000" name="phoneNumber" className="input w-[30rem] rounded-md" required />
                                </div>
                            
                                {/* Special considerations textarea */}
                                <div className="flex flex-col ">
                                    <label htmlFor="message"
                                        className="text-lg font-semibold">
                                        Do you have any special considerations?
                                    </label>
                                    <textarea rows="4"
                                        name="message"
                                        placeholder="Optional"
                                        className="input w-[30rem] rounded-md">
                                        
                                    </textarea>
                                </div>
                            </div>


                            {/* Submit button */}
                            <div className="flex justify-center">
                                <button type="submit" className="no-shadow-btn px-16 py-2.5 ml-[17rem]">Submit</button>
                            </div>
                        </form>

                        
                    </article>

                    {/* Card with appointment info     */}
                    <article>
                        <div className="flex flex-col">
                            <h3 className="text-lg font-semibold mb-4">Appointment Details</h3> 
                                <div className="flex flex-col bg-oceanBlue px-12 py-16 rounded-lg gap-8 w-4/5">
                                    <div className="flex flex-col">
                                        <h4 className="text-lg font-semibold">APPOINTMENT</h4>
                                        <p>New Patient</p>
                                        <p>Date</p>
                                    </div>


                                    <div className="flex flex-col">
                                        <h4 className="text-lg font-semibold">ADDRESS</h4>
                                        <p className='text-lg font-medium w-[95%]'>
                                            Radiant Dental Studio
                                            11.63 Main Street
                                            Anytown, NJ 07001
                                        </p>
                                    </div>

                                    <div className="flex flex-col ">
                                        <h4 className="text-lg font-semibold">PROVIDER</h4>
                                        <p>Dental Therapist</p>
                                        <p>Nathan Williams</p>
                                    </div>
                            </div>
                        </div>
                    </article>
                    </div>
                    
                </section>
                </div>

            <Footer/>
        </main>
    );
}

export default BookAppointment;
