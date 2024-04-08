import { Total } from './Total/Total';
import { Header } from './Header/Header';
import { Cart } from './Cart/Cart'
import './App.css';
import { ProductsContextProvider } from './ProductsContext';

function App() {
  return (
    <ProductsContextProvider>
      <div className="App">
        <Header />
        <Cart />
        <Total />
      </div>
    </ProductsContextProvider>
  );
}

export default App;
