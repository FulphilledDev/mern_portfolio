import Hero from '../components/landing/Hero'
import Skills from '../components/landing/Skills'
import Testimonials from '../components/landing/Testimonials'
import Principles from '../components/landing/Principles'
import Details from '../components/landing/Details'
import Footer from '../components/Footer'
import CallToAction from '../components/landing/CallToAction'

const Main = () => {
  return (
    <div>
      <Hero />
      <Testimonials />
      <Principles />
      <Skills />
      <Details />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Main
