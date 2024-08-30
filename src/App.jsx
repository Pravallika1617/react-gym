import './App.css'
import Header from './components/Header/Header'
import RegistrationPage from './components/Header/Registration'
import Exercises from './components/UI/Exercises'
import Footer from './components/UI/Footer'
import Hero from './components/UI/Hero'
import Pricing from './components/UI/Pricing'
import Start from './components/UI/Start'
import Testimonial from './components/UI/Testimonial'


function App() {

  return (
    <>
      <Header />
      <Hero />
      <Exercises />
      <Start />
      <Pricing />
      <Testimonial />
      <RegistrationPage />
      <Footer/>
    </>
  )
}

export default App
