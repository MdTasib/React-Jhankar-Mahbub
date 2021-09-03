import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from '../CardForm/CardForm';
import SplitFrom from '../SplitFrom/SplitForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const ProcessPayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CardForm />
      {/* <SplitFrom /> */}
    </Elements>
  );
};

export default ProcessPayment;