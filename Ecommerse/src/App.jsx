import { Body } from './components/Body'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home'
import Login from './Pages/Login';
import Signup from './Pages/SignUp';
import Checkout from './Pages/CheckOut';
import { AuthProvider } from './context/AuthContext';
import { Products } from './Pages/ProductPage';
import { LikedProductsProvider } from './components/OrderProduct';

const App = () => {
  return (

    <div className='w-screen'>
      <AuthProvider>
        <LikedProductsProvider>
          <Router>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
          </Router>
        </LikedProductsProvider>
      </AuthProvider>

    </div >

  )
}
export default App
