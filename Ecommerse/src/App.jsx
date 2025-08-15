import { Body } from './components/Body'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Recommend } from './components/Recommend'
import { Services } from './components/Services'


const App = () => {
  return (

    <div className='w-screen'>
      <Header />
      <Hero />
      <div className='lg:w-[1296px] w-screen mx-auto'>
        <Services />
        <Recommend />
        <Body />
      </div>
      <Footer />
    </div >

  )
}
export default App
