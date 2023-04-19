import { Route, Routes } from 'react-router-dom';

import '../scss/app.scss';

import Header from './common/Header/Header';

import Home from './page/Home/Home';
import Cart from './page/Cart/Cart';
import Product from './page/Product/Product';

import Footer from './common/Footer/Footer';
import NotFound from './page/NotFound/NotFound';

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='main_content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/pizza' element={<Product title='Пиццы 🍕' category='pizza' />} />
          <Route path='/drinks' element={<Product title='Напитки 🥤' category='drinks' />} />
          <Route path='/desserts' element={<Product title='Дессерты 🍰' category='desserts' />} />
          <Route path='/sausec' element={<Product title='Соусы 🥫' category='sausec' />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
