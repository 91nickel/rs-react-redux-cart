import { Total } from './Total/Total';
import { Header } from './Header/Header';
import { Cart } from './Cart/Cart'
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import { OrderModal } from './OrderModal/OrderModal';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Cart />
        <Total />
        <OrderModal />
      </div>
    </Provider>
  );
}

export default App;
