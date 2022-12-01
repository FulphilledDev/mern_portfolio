import { Fragment, useState } from 'react';
import { PopupButton } from "react-calendly";
import { Dialog, Transition } from '@headlessui/react'
import LiveDemo from './LiveDemo';

const Hero = () => {

  const [liveDemo, setLiveDemo] = useState(false)

  const showDemo = () => {
    if (!liveDemo) {
      setLiveDemo(true)
    } else {
      setLiveDemo(false)
    }
  }


return (
<main>
        <div>
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                    alt="People working on ipad together"
                  />
                  <div className="absolute inset-0  bg-gradient-to-r from-blue-800 to-teal-800 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Want a website</span>
                    <span className="inline-block text-blue-200">that represents you?</span>
                    <span className="block text-blue-200 mx-1">Book your</span>
                    <span className="block text-yellow-400 mx-1">FREE</span>
                    <span className="block text-blue-200 mx-1">consult today!</span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-blue-200 sm:max-w-3xl">
                    Collaborate with me to design a website that meets all of your business needs, and makes your business goals more possible.
                  </p>
                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <PopupButton
                        url="https://calendly.com/simpsonsoftware/free-web-consult"
                        rootElement={document.getElementById("root")}
                        text="Click here to schedule!"
                        className="flex items-center justify-center mx-auto rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-blue-50 sm:px-8 w-full"
                      />
                      <button
                        onClick={showDemo}
                        className="flex items-center justify-center mx-auto rounded-md border border-transparent bg-gradient-to-r from-blue-800 to-teal-700 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 hover:from-blue-700 hover:to-teal-600 sm:px-8 w-full"
                      >
                        Live demo
                      </button>
                      {liveDemo ? (
                        <Transition.Root 
                          show={liveDemo} 
                          as={Fragment}
                        >
                          <Dialog 
                            as="div" 
                            className="relative z-10" onClose={setLiveDemo}>
                            <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            </Transition.Child>

                            <div className="fixed inset-0 z-10 overflow-y-auto">
                              <div className="flex min-h-full items-end items-center justify-center p-4 text-center sm:items-center sm:p-0">
                                <Transition.Child
                                  as={Fragment}
                                  enter="ease-out duration-300"
                                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                                  leave="ease-in duration-200"
                                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-2xl sm:p-6">
                                    <div>
                                      <div className="mt-3 text-center sm:mt-5">
                                        <div className="mt-2">
                                          <LiveDemo 
                                            />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                      <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-blue-800 to-teal-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:from-blue-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                                        onClick={() => setLiveDemo(false)}
                                      >
                                        Go back
                                      </button>
                                    </div>
                                  </Dialog.Panel>
                                </Transition.Child>
                              </div>
                            </div>
                          </Dialog>
                        </Transition.Root>
                                          ) : null}
                      
                      {/* Insert modal of A3 website loom here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
)}

export default Hero