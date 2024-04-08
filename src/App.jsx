import { Total } from './Total/Total';
import { Header } from './Header/Header';
import { Cart } from './Cart/Cart'
import './App.css';
import { useCallback, useMemo, useState } from 'react';
import { initialProducts } from './initialProducts';
import { round } from './utils';

function App() {
  const [products, setProducts] = useState(initialProducts);

  const total = useMemo(() => {
    const subtotal = products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    const tax = subtotal * .13;
    const total = subtotal + tax;

    return {
      subtotal: round(subtotal),
      tax: round(tax),
      total: round(total)
    };
  }, [products]);

  const increaseQuantity = useCallback((id) => {
    setProducts((products) => products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1
        }
      }

      return product;
    }))
  }, []);

  const decreaseQuantity = useCallback((id) => {
    setProducts((products) => products.map((product) => {
      if (product.id === id && product.quantity > 0) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      }

      return product;
    }))
  }, []);

  return (
    <div className="App">
      <Header />
      <Cart
        products={products}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      <Total subtotal={total.subtotal} tax={total.tax} total={total.total} />
    </div>
  );
}

export default App;
