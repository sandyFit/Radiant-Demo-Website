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
        <div id='contact' className='flex flex-col items-center w-[15rem] md:w-[20rem] xl:w-[16rem] gap-6'>
            <form onSubmit={handleSubmit} noValidate className="w-full flex flex-col"> 
                {/* <label htmlFor="text" className="text-xxsmall-white pb-3">Enter your email</label> */}
                <input
                    type="email"
                    id="email"
                    className="bg-indigo-100 border-4 border-indigo-400 
                            text-indigo-400 text-sm xl:text-lg rounded-lg focus:outline-none
                            focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                            block w-full p-2 md:p-2.5"
                    placeholder="john.doe@company.com"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <div className="mt-6 transparent-btn w-32 md:w-36 xl:w-[10rem] py-1 md:py-[.4rem] xl:py-2 
                    hover:text-indigo-200 text-[.8rem] xl:text-[1rem] font-[300]">
                    <Button text={'subscribe'}/>
                </div>
            </form>
            <p className='text-min-white '>
                Stay updated with our Dental Studio Newsletter! Get the latest on services, treatments,
                and practice news. Your privacy is important to us; your data is safe. Join us today! 
            </p>
        </div>
    );
};

export default NewsletterInput;
