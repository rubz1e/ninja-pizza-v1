import '../scss/app.scss';

import Header from './common/Header/Header';
import Home from './page/Home/Home';
import Footer from './common/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='main_content'>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
