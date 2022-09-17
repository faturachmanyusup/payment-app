import './App.css';
import { Routes, Route } from 'react-router-dom';
import Payment from './pages/Payment';
import AfterPayment from './pages/AfterPayment';

function App() {
  return (
    <div className="App" style={{ marginTop: '15rem' }}>
      <Routes>
        <Route path='/' element={<Payment />} />
        <Route path='/after-payment' element={<AfterPayment />} />
      </Routes>
    </div>
  );
}

export default App;
