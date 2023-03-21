import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';

export function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='main'>
        <Home />
      </div>
      <Footer />
    </div>
  );
}
