
import './App.css';
import { Car } from './components/Car';
import { CarListingSection } from './components/CarListingSection';
import Footer from './components/footer';
import Header from './components/Header';
import Hero from './components/Hero';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LikedCarsPage from './pages/LikedCarsPage';
import { Home } from './pages/Home';
import { LikedCarsProvider } from './context/LikedCarsContext';

function App() {
  const car = {
  }
  return (
    <div>
      <LikedCarsProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/liked" element={<LikedCarsPage />} />


          </Routes>
        </Router>
      </LikedCarsProvider>
    </div>
  )
}

export default App
