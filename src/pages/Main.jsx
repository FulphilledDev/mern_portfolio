import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Testimonials from '../components/Testimonials'
import Principles from '../components/Principles'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import CallToAction from '../components/CallToAction'

      /*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/




const Main = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Principles />
      <Testimonials />
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Main
