import axios from 'axios';

export default function Payment(props) {
  const handlePay = () => {
    axios
      .post('https://payment-demo-1.herokuapp.com/buy')
      .then((res) => {
        window.snap.pay(res.data.token, {
          onSuccess: handleSuccess,
          onPending: handlePending,
          onError: handleError,
        });
      })
      .catch((err) => {
        console.log(err, '<<< ERRR');
      })
  }

  const handleSuccess = (result) => {
    // rubah button
    // redirect halaman
    console.log(result, '<<< SUCCESS');
  }
  
  const handlePending = (result) => {
    // rubah button
    // redirect halaman
    console.log(result, '<<< Pending');
    
  }
  const handleError = (result) => {
    // rubah button
    // redirect halaman
    console.log(result, '<<< Error');
  }

  return (
    <div>
      <button
        type="button"
        onClick={handlePay}
      >
        Click to Buy!
      </button>
    </div>
  )
}