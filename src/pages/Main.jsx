import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Testimonials from '../components/Testimonials'
import Principles from '../components/Principles'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import CallToAction from '../components/CallToAction'
// import RequestForm from '../components/RequestForm'

{/* TODO: Pass in state of plans from pricing component into requestform component, and map in order to fill fields when selectedPlan ==== plan.name */}
const Main = () => {
  return (
    <div>
      <Hero />
      <Testimonials />
      <Principles />
      <Skills />
      <Pricing />
      {/* <RequestForm/> */}
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Main
