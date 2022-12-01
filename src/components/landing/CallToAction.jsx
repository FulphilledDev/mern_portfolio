import { useState } from 'react';
import { PopupButton } from "react-calendly";
import ContactForm from './ContactForm';

const CallToAction = () => {
  const [openContact, setOpenContact] = useState('closed')

  const toggleContact = () => {
    if (openContact === 'closed') {
      setOpenContact('open')
    } else {
      setOpenContact('closed')
    }
  }

  return (
    <div className="bg-white">
          <div className="mx-auto max-w-4xl py-16 px-4 sm:px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="-mb-1 block bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text pb-1 text-transparent">
                Get in touch or book a consult.
              </span>
            </h2>
            <div className="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
              <button
                onClick={toggleContact}
                className="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-blue-700 to-teal-600 bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-blue-600 hover:to-teal-500"
              >
                Contact Me
              </button>
              <PopupButton
                url="https://calendly.com/simpsonsoftware/free-web-consult"
                rootElement={document.getElementById("root")}
                text="Click here to schedule!"
                className="flex items-center w-full md:w-auto justify-center rounded-md border border-transparent bg-blue-50 px-4 py-3 text-base font-medium text-blue-800 shadow-sm hover:bg-blue-100"
              />
            </div>
          </div>
          {openContact === 'open' ? ( <ContactForm />
          ) : null}
        </div>
  )
}

export default CallToAction
