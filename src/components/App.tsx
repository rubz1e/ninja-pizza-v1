import '../scss/app.scss';

import Header from './common/Header/Header';
import Home from './page/Home/Home';

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
