import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Header = (...classes) => {

  const solutions = [
  {
    name: 'Single Page App',
    description: 'Start with a single page and add your own special features.',
    href: '#singlePage',
    icon: InboxIcon,
  },
  {
    name: 'Multi-Page App',
    description: 'Diversify your website to better serve and manage your customers.',
    href: '#multi-page',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Full-Stack App',
    description: 'End-to-end features that achieve and automate most of your everyday needs',
    href: '#full-stack',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'FAQs',
    description: "Connect with third-party tools that you're already using.",
    href: '/faqs',
    icon: QuestionMarkCircleIcon,
  },
]

    const classNames = () => {
      return classes.filter(Boolean).join(' ')
    }
    
  return (
    <>
      <div className="bg-white">
        <header>
          <Popover className="relative bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#!">
                  <span className="sr-only">Simpson Software</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/mark.svg?from-color=blue&from-shade=600&to-color=teal&to-shade=600&toShade=600"
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
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2'
                        )}
                      >
                        {/* { Create a down arrow to indicate dropdown menu } */}
                        <span className="text-base font-medium text-gray-500 hover:text-gray-900">Solutions</span>
                        {/* <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-1 w-1 group-hover:text-gray-500'
                          )}
                          aria-hidden="true"
                        /> */}
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                              {solutions.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                >
                                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-teal-600 text-white sm:h-12 sm:w-12">
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                  </div>
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                
                {/* 
                  
                  NavBar Links 
                  
                */}
                <a href="/projects" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Projects
                </a>
                <a href="/blog" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Blog
                </a>
              </Popover.Group>
              <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                <a href="#!" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                  Sign in
                </a>
                <a
                  href="#!"
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-blue-700 hover:to-teal-700"
                >
                  Sign up
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
                  <div className="py-6 px-5">
                    <div className="grid grid-cols-2 gap-4">
                      <a href="/projects" className="text-base font-medium text-gray-900 hover:text-gray-700">
                        Projects
                      </a>
                      <a href="/blog" className="text-base font-medium text-gray-900 hover:text-gray-700">
                        Blog
                      </a>
                    </div>
                    <div className="mt-6">
                      <a
                        href="#!"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-blue-700 hover:to-teal-700"
                      >
                        Sign up
                      </a>
                      <p className="mt-6 text-center text-base font-medium text-gray-500">
                        Existing customer?
                        <a href="#!" className="text-gray-900">
                          Sign in
                        </a>
                      </p>
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
