import React from 'react';
import History from "../../assets/Home/empty shopping basket.png";
 
const AccountHistory = () => {
  return (
    <div className='w-full flex flex-col space-y-4 items-center p-4 sm:p-6 md:p-8'>
      <img
        src={History}
        alt="Empty Basket"
        className='w-40 sm:w-60 md:w-80 lg:w-96 h-auto'
      />
      <h2 className='text-lg sm:text-xl md:text-2xl font-semibold text-center'>
        No action taken
      </h2>
    </div>
  );
};
 
export default AccountHistory;