import { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import {
  Bars3Icon,
  UserIcon,
  BriefcaseIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import IconOnly  from '../assets/images/IconOnly.png'

const Header = () => {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
    
  return (
    <>
      <header>
          <Popover className="relative bg-white px-2">
            <div className="mx-auto flex max-w-full items-center justify-between py-6 md:justify-start ">
              <div className="flex items-center gap-4">
                  <Link to='/' className='flex justify-start gap-3 items-center md:border-r-2 md:border-gray-700 md:pr-4'>
                    <img
                      className="h-8 w-auto sm:h-10 rounded-full object-cover"
                      src={IconOnly}
                      alt="Simpson Software"
                    />
                    <span className="font-medium text-blue-800 rounded-md hover:text-teal-700 hover:underline">Simpson Software</span>
                  </Link>
                  <Link to="/projects" className="hidden md:flex whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                    Projects
                  </Link>
                  <a href="https://fulphilleddev.github.io/resume-website/" target="_blank" rel="noopener noreferrer" className="hidden md:flex whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                    Resume
                  </a>
              </div>
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              </Popover.Group>
              
                  {/* <>
                    <div className='hidden items-center justify-end md:flex md:flex-1 lg:w-0'>
                      <button
                        type='button'
                        className='ml-4 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-blue-700 hover:to-teal-700'
                        disabled>
                        Get Started
                      </button>
                    </div>
                  </> */}
               
            </div>

            <Transition
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* 

                Phone Screens

              */}
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="px-5 pt-5 pb-6">
                    <div className="flex items-center justify-between">
                      <Link to='/' className='flex justify-start gap-3 items-center md:border-r-2 md:border-gray-700 md:pr-4'>
                        <img
                          className="h-8 w-auto"
                          src={IconOnly}
                          alt="Your Company"
                        />
                        <span className="font-medium text-blue-800 rounded-md hover:text-teal-700 hover:underline hover:pointer">Simpson Software</span>
                      </Link>
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                          <span className="sr-only">Close menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid grid-cols-1 gap-7">
                        <Link
                          to='/projects'
                          className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                        >
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-teal-600 text-white">
                            <BriefcaseIcon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">Projects</div>
                        </Link>
                        <a href="https://fulphilleddev.github.io/resume-website/" target="_blank" rel="noopener noreferrer" className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
                          <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-teal-600 text-white'>
                            <UserIcon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">Resume</div>
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </header>
      </>
  )
}

export default Header
