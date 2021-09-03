import React from 'react';
import ProcessPayment from './ProcessPayment/ProcessPayment';

const Stripe = () => {
  return (
    <div className='row p-5'>
      <div className="text-center">
        Stripe payment getway
      </div>
      <div className="col-md-6">
        <img className='w-100 py-3' src="https://forum.bubble.io/uploads/default/original/3X/2/5/2507a8c2779e664efe9dc422c519f62df2edda34.gif" alt="" />
      </div>
      <div className="col-md-6 mt-5 w-50">
        <ProcessPayment />
      </div>
    </div>
  );
};

export default Stripe;