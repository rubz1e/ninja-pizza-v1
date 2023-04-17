import './scss/app.scss';

import Header from './components/common/Header/Header';
import Home from './components/page/Main/Home';

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='main_content'>
        <Home />
      </main>
    </div>
  );
}

export default App;
