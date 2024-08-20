import { useState } from "react";
import { showAlert } from "../../utils/functions";
import Button from "../buttons/Button";

const NewsletterInput = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email) {
            showAlert('Fields should NOT be empty.', 'error',);
        }
        else if (!emailRegex.test(email)) { // Notice the `!` to correctly apply the logic
            showAlert('Email should follow the standard format: john@doe.com', 'error');
            setEmail('')
        }
        else {
            showAlert('Your email was submitted successfully.', 'success');
            setEmail('');
        }
    };

    return (
        <section id='contact' className='flex flex-col items-center w-[15rem] md:w-[20rem] lg-sm:w-[14rem] 
            xl:w-[16rem] gap-6 xl:gap-1 2xl-sm:gap-6'>
            <form onSubmit={handleSubmit} noValidate className="w-full flex flex-col items-center 2xl-sm:items-start"> 
                <input
                    type="email"
                    id="email"
                    className="bg-indigo-100 border-4 border-indigo-400 
                            text-indigo-400 text-sm xl:text-lg rounded-lg focus:outline-none
                            focus:ring-2 focus:ring-indigo-300 focus:border-indigo-600
                            block w-full p-2 md:p-2.5 xl:p-1 2xl-sm:p-2.5"
                    placeholder="john.doe@company.com"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <div className="mt-6 xl:mt-4 2xl-sm:mt-6 transparent-btn w-32 md:w-36 lg-sm:w-[8rem] 
                    xl:w-[6.8rem] 2xl-sm:w-[10rem] 
                    py-1 md:py-[.4rem] 2xl-sm:py-2 hover:text-indigo-200 text-[.8rem] 2xl-sm:text-[1rem]
                    font-[300]">
                    <Button text={'subscribe'} aria={'Click to subscribe'}/>
                </div>
            </form>
            <p className='text-min-white xl:hidden 2xl-sm:block'>
                Stay updated with our Dental Studio Newsletter! Get the latest on services, treatments,
                and practice news. Your privacy is important to us; your data is safe. Join us today! 
            </p>
        </section>
    );
};

export default NewsletterInput;
