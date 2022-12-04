import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  QuestionMarkCircleIcon,
  BriefcaseIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import IconOnly  from '../assets/images/IconOnly.png'

const Header = () => {

  const solutions = [
  {
    name: 'FAQs',
    description: "",
    href: '/faqs',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Projects',
    description: ".",
    href: '/projects',
    icon: BriefcaseIcon,
  },
]
    
  return (
    <>
      <div className="bg-white">
        <header>
          <Popover className="relative bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                  <span className="sr-only">Simpson Software</span>
                  <a href='/'>
                    <img
                      className="h-8 w-auto sm:h-10 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
                      src={IconOnly}
                      alt=""
                    />
                  </a>
              </div>
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              </Popover.Group>
              <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                <a href="/faqs" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                  FAQs
                </a>
                <a
                  href="/projects"
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-blue-700 hover:to-teal-700"
                >
                  Projects
                </a>
              </div>
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

                Phone Screens w/ Sidebar Menu

              */}
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="px-5 pt-5 pb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/mark.svg?from-color=blue&from-shade=600&to-color=teal&to-shade=600&toShade=600"
                          alt="Your Company"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                          <span className="sr-only">Close menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid grid-cols-1 gap-7">
                        {solutions.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                          >
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-teal-600 text-white">
                              <item.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </header>
        </div>
      </>
  )
}

export default Header
