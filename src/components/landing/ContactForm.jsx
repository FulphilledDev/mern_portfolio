import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const ContactForm = () => {
    const [open, setOpen] = useState(true)

    const cancelButtonRef = useRef(null)

    const [formState, setFormState] = useState({})

    const changeHandler = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const sendEmail = (e) => {
        e.prevenDefault()

        const config = {
            SecureToken: '0497237f-02ba-4bff-aac1-39a4b395f1e6',
            To : 'philip@simpsonsoftware.site',
            From : formState.email,
            Subject : formState.subject,
            Body : `
                First: ${formState.firstName}
                Last: ${formState.lastName}
                Phone: ${formState.phone}
                Message: ${formState.message}
            `
        }

        if(window.Email) {
            window.Email.send(config).then(() => alert('Email sent successfully! Thank you!'))
        }
    }

  return (
    <>
    <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
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
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                <Dialog.Panel className="bg-gray-100 relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-6">
                    <div>
                    
                        <div className="mt-3 text-center sm:mt-5">
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                Send me a message!
                            </Dialog.Title>
                            <div className="mt-2">
                                <p className="text-md text-gray-800">
                                    I'm looking forward to chatting with you and helping in any way I can.
                                </p>
                            </div>
                            {/* 
                            
                                Contact Form
                            
                            */}
                            <div className="mx-auto max-w-7xl py-16 px-4 sm:py-12 sm:px-6 lg:px-8">
                                <div className="relative bg-white shadow-xl sm:rounded-none md:rounded-lg">
                                    <h2 className="sr-only">Contact us</h2>

                                    <div className="grid grid-cols-1">
                                    {/* Contact information */}
                                        <div className="relative overflow-hidden bg-gradient-to-r from-blue-800 to-teal-700 py-10 px-6 sm:px-10 xl:p-12 rounded-t-lg">
                                            <div className="pointer-events-none absolute inset-0 sm:hidden" aria-hidden="true">
                                                <svg
                                                    className="absolute inset-0 h-full w-full"
                                                    width={343}
                                                    height={388}
                                                    viewBox="0 0 343 388"
                                                    fill="none"
                                                    preserveAspectRatio="xMidYMid slice"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                                                    fill="url(#linear1)"
                                                    fillOpacity=".1"
                                                    />
                                                    <defs>
                                                    <linearGradient
                                                        id="linear1"
                                                        x1="254.553"
                                                        y1="107.554"
                                                        x2="961.66"
                                                        y2="814.66"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#fff" />
                                                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                                    </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div
                                            className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                                            aria-hidden="true"
                                            >
                                                <svg
                                                    className="absolute inset-0 h-full w-full"
                                                    width={359}
                                                    height={339}
                                                    viewBox="0 0 359 339"
                                                    fill="none"
                                                    preserveAspectRatio="xMidYMid slice"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                                                    fill="url(#linear2)"
                                                    fillOpacity=".1"
                                                    />
                                                    <defs>
                                                    <linearGradient
                                                        id="linear2"
                                                        x1="192.553"
                                                        y1="28.553"
                                                        x2="899.66"
                                                        y2="735.66"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#fff" />
                                                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                                    </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div
                                            className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                                            aria-hidden="true"
                                            >
                                                <svg
                                                    className="absolute inset-0 h-full w-full"
                                                    width={160}
                                                    height={678}
                                                    viewBox="0 0 160 678"
                                                    fill="none"
                                                    preserveAspectRatio="xMidYMid slice"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                                                    fill="url(#linear3)"
                                                    fillOpacity=".1"
                                                    />
                                                    <defs>
                                                    <linearGradient
                                                        id="linear3"
                                                        x1="192.553"
                                                        y1="325.553"
                                                        x2="899.66"
                                                        y2="1032.66"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#fff" />
                                                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                                    </linearGradient>
                                                    </defs>
                                                </svg>
                                            
                                            </div>
                                            <h3 className="text-lg font-medium text-white">Contact information</h3>
                                            <dl className="mt-8 space-y-6">
                                                <dt>
                                                    <span className="sr-only">Phone number</span>
                                                </dt>
                                                <dd className="flex text-base text-blue-50">
                                                    <PhoneIcon className="h-6 w-6 flex-shrink-0 text-blue-200" aria-hidden="true" />
                                                    <span className="ml-3">+1 (702) 637-2346</span>
                                                </dd>
                                                <dt>
                                                    <span className="sr-only">Email</span>
                                                </dt>
                                                <dd className="flex text-base text-blue-50">
                                                    <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-blue-200" aria-hidden="true" />
                                                    <span className="ml-3">philip@simpsonsoftware.site</span>
                                                </dd>
                                            </dl>
                                            <ul className="mt-8 flex space-x-12">
                                                <li>
                                                    <a className="text-blue-200 hover:text-blue-100" href="https://github.com/fulphilleddev">
                                                        <span className="sr-only">GitHub</span>
                                                        <svg
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                            d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12"
                                                            fill="currentColor"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="text-blue-200 hover:text-blue-100" href="https://twitter.com/FulphilledDev">
                                                        <span className="sr-only">Twitter</span>
                                                        <svg
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                            d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209"
                                                            fill="currentColor"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Contact form */}
                                        <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                                            <form onSubmit={sendEmail} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 text-start">
                                                <div>
                                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-900">
                                                        First name
                                                    </label>
                                                    <div className="mt-1">
                                                        <input
                                                            type="text"
                                                            name="firstName"
                                                            id="firstName"
                                                            value={formState.firstName || ''}
                                                            onChange={changeHandler}
                                                            autoComplete="given-name"
                                                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-900">
                                                        Last name
                                                    </label>
                                                    <div className="mt-1">
                                                        <input
                                                            type="text"
                                                            name="lastName"
                                                            id="lastName"
                                                            value={formState.lastName || ''}
                                                            onChange={changeHandler}
                                                            autoComplete="family-name"
                                                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                                        Email
                                                    </label>
                                                    <div className="mt-1">
                                                        <input
                                                            id="email"
                                                            name="email"
                                                            type="email"
                                                            value={formState.email || ''}
                                                            onChange={changeHandler}
                                                            autoComplete="email"
                                                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex justify-between">
                                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                                                            Phone
                                                        </label>
                                                        <span id="phone-optional" className="text-sm text-gray-500">
                                                            Optional
                                                        </span>
                                                    </div>
                                                    <div className="mt-1">
                                                        <input
                                                            type="text"
                                                            name="phone"
                                                            id="phone"
                                                            value={formState.phone || ''}
                                                            onChange={changeHandler}
                                                            autoComplete="tel"
                                                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                                            aria-describedby="phone-optional"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-2">
                                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                                                        Subject
                                                    </label>
                                                    <div className="mt-1">
                                                        <input
                                                            type="text"
                                                            name="subject"
                                                            id="subject"
                                                            value={formState.subject || ''}
                                                            onChange={changeHandler}
                                                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                                        />
                                                    </div>
                                                </div>
                                                <fieldset className="sm:col-span-2">
                                                    <legend className="block text-sm font-medium text-gray-700">Expected budget</legend>
                                                    <div className="mt-4 grid grid-cols-1 gap-y-4">
                                                        <div className="flex items-center">
                                                            <input
                                                            id="budget-under-1k"
                                                            name="budget"
                                                            defaultValue="under_1k"
                                                            type="radio"
                                                            className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                                                            />
                                                                <label htmlFor="budget-under-1k" className="ml-3">
                                                                    <span className="block text-sm text-gray-700">Less than $1K</span>
                                                                </label>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <input
                                                            id="budget-1k-2.5k"
                                                            name="budget"
                                                            defaultValue="1k-2.5k"
                                                            type="radio"
                                                            className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                                                            />
                                                                <label htmlFor="budget-1k-2.5k" className="ml-3">
                                                                    <span className="block text-sm text-gray-700">$1K – $2.5K</span>
                                                                </label>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <input
                                                            id="budget-2.5k-5k"
                                                            name="budget"
                                                            defaultValue="2.5k-5k"
                                                            type="radio"
                                                            className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                                                            />
                                                                <label htmlFor="budget-2.5k-5k" className="ml-3">
                                                                    <span className="block text-sm text-gray-700">$2.5K – $5K</span>
                                                                </label>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <input
                                                            id="budget-over-5k"
                                                            name="budget"
                                                            defaultValue="over_5k"
                                                            type="radio"
                                                            className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                                                            />
                                                                <label htmlFor="budget-over-5k" className="ml-3">
                                                                    <span className="block text-sm text-gray-700">$5K+</span>
                                                                </label>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                                <div className="sm:col-span-2">
                                                    <div className="flex justify-between">
                                                        <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                                                            Message
                                                        </label>
                                                        <span id="message-max" className="text-sm text-gray-500">
                                                            Max. 500 characters
                                                        </span>
                                                    </div>
                                                    <div className="mt-1">
                                                        <textarea
                                                            id="message"
                                                            name="message"
                                                            value={formState.message || ''}
                                                            onChange={changeHandler}
                                                            rows={4}
                                                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                                            aria-describedby="message-max"
                                                            defaultValue={''}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-2 sm:flex sm:justify-center gap-3">
                                                    <button
                                                        type="submit"
                                                        className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-blue-800 to-teal-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:from-blue-700 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                                    >
                                                        Submit
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gray-200 px-6 py-3 text-base font-medium shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                                        onClick={() => setOpen(false)}
                                                        ref={cancelButtonRef}
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
                </Transition.Child>
            </div>
            </div>
        </Dialog>
        </Transition.Root>
    </>         
  )
}

export default ContactForm
