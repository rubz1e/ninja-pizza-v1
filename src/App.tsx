import './scss/app.scss';

import Header from './components/common/Header/Header';
import Categories from './components/common/Categories/Categories';

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='main_content'>
        <Categories />
      </main>
    </div>
  );
}

export default App;
