import { Route, Routes } from 'react-router-dom';

import '../scss/app.scss';

import Header from './common/Header/Header';

import Main from './page/Main/Main';
import Cart from './page/Cart/Cart';
import Product from './page/Product/Product';

import Footer from './common/Footer/Footer';
import NotFound from './page/NotFound/NotFound';
import Favorite from './page/Favorite/Favorite';
import Login from './page/Login/Login';
import SignUp from './page/SignUp/SignUp';
import Home from './page/Home/Home';
import ResetPassword from './page/ResetPassword/ResetPassword';

function App() {
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
          <Route path='/favorite' element={<Favorite />} />

          <Route path='/login' element={<Login />} />
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
