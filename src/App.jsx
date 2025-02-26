import { BrowserRouter } from 'react-router-dom';
import OrderForm from './OrderForm.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <OrderForm />
    </BrowserRouter>
  );
}

export default App;
