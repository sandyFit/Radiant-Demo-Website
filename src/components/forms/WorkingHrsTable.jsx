import React from 'react'

import Button from '../buttons/Button';

const WorkingHrsTable = () => {

  return (
    <article className='flex flex-col justify-center items-center' style={{zIndex:20}}>      
      <table className='text-min-white flex justify-center border-separate border-spacing-x-4 border-spacing-y-2
        xl:border-spacing-y-1 2xl-sm:border-spacing-y-2'>
        <tbody>
          <tr>
            <td className='font-[700]'>MON</td>
            <td>09:00 am – 18:00 pm</td>
          </tr>
          <tr>
            <td className='font-[700]'>TUES</td>
            <td>09:00 am – 18:00 pm</td>
          </tr>
          <tr>
            <td className='font-[700]'>WED &nbsp;</td>
            <td>09:00 am – 17:00 pm</td>
          </tr>
          <tr>
            <td className='font-[700]'>THUR</td>
            <td>09:00 am – 18:00 pm</td>
          </tr>
          <tr>
            <td className='font-[700]'>FRI</td>
            <td>09:00 am – 17:00 pm</td>
          </tr>
          <tr>
            <td className='font-[700]'>SAT</td>
            <td>By Appointment</td>
          </tr>
        </tbody>
      </table>

      {/* <button className='btn-filled px-16 py-3 mt-4'>
        book online
      </button> */}

      <div className="flex btn-book-online mt-10 xl:mt-5 2xl-sm:mt-10 px-12 md:px-[4.8rem] lg-sm:px-10 
        xl:px-16 2xl-sm:px-9 2xl:px-12 py-2 xl:py-1 2xl-sm:py-2 text-[1.1rem] 
        md:text-[1.3rem] lg-sm:text-[1.2rem] xl:text-[1rem] 2xl-sm:text-[1.4rem]">
        <Button text={'book online'} aria={'Click to book online'}/>
      </div>
    </article>
  );
};

export default WorkingHrsTable;
