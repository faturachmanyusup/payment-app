import { useSearchParams } from 'react-router-dom';

export default function AfterPayment(props) {
  const [searchParams] = useSearchParams();

  return (
    <div>
      <h2>
        After Payment Page
      </h2>
      <h4>
        { searchParams.get('order_id') }
      </h4>
    </div>
  )
}