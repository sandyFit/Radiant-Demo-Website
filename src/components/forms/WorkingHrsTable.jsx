import React from 'react'

import Button from '../buttons/Button';

const WorkingHrsTable = () => {
  return (
    <article className='flex flex-col justify-center items-center' style={{zIndex:20}}>      
      <table className='text-min-white flex  justify-center'
        style={{ borderCollapse: 'separate', borderSpacing: '0 .6rem' }}>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>09:00 am – 18:00 pm</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>09:00 am – 18:00 pm</td>
          </tr>
          <tr>
            <td>Wednesday &nbsp;</td>
            <td>09:00 am – 18:00 pm</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>09:00 am – 18:00 pm</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>09:00 am – 18:00 pm</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>10:00 am - 15:00 pm</td>
          </tr>
        </tbody>
      </table>

      {/* <button className='btn-filled px-16 py-3 mt-4'>
        book online
      </button> */}

      <div className="flex btn-book-online mt-10 px-12 py-2 text-[1.4rem]">
        <Button text={'book online'}/>
      </div>
    </article>
  );
};

export default WorkingHrsTable;
