import './scss/app.scss';

import Header from './components/common/Header/Header';
// import Categories from './components/common/Categories/Categories';
import Carousel from './components/common/Carousel/Carousel';

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='main_content'>
        <Carousel />
        {/* <Categories /> */}
      </main>
    </div>
  );
}

export default App;
