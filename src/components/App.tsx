import { Route, Routes } from 'react-router-dom';

import '../scss/app.scss';

import Header from './common/Header/Header';

import Main from './page/Main/Main';
import Cart from './page/Cart/Cart';
import Product from './page/Product/Product';

import Footer from './common/Footer/Footer';
import NotFound from './page/NotFound/NotFound';
import SignUp from './page/SignUp/SignUp';
import Home from './page/Home/Home';
import ResetPassword from './page/ResetPassword/ResetPassword';
import { useAppDispatch } from '../hooks/redux-hooks';
import { useEffect } from 'react';
import { setUser } from '../redux/slices/userSlice';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(setUser(user));
      return;
    }
  }, [dispatch]);

  return (
    <div className='App'>
      <Header />
      <main className='main_content'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/pizza' element={<Product title='Пиццы 🍕' category='pizza' />} />
          <Route path='/drinks' element={<Product title='Напитки 🥤' category='drinks' />} />
          <Route path='/desserts' element={<Product title='Дессерты 🍰' category='desserts' />} />
          <Route path='/sausec' element={<Product title='Соусы 🥫' category='sausec' />} />

          <Route path='/signup' element={<SignUp />} />
          <Route path='/resetpassword' element={<ResetPassword />} />

          <Route path='/home' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
