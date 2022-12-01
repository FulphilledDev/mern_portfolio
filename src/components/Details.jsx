import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'

{/* TODO: Replace/Remove: priceMonthly/Yearly --> startingAt  */}
{/* TODO: Create request form for Single-Page */}
{/* TODO: Create request form for Multi-Page */}
{/* TODO: Create request form for Full-Stack */}
{/* TODO: Create a quote calculator for site request
    -- Include: prices per page, section, functionality, etc. */}




const plans = [
  {
    title: 'MySQL / MongoDB',
    category: 'Backend Databases',
    featured: false,
    description: 'The backbone of any application or website ',
    mainFeatures: [
      { id: 1, value: 'Provides structure' },
      { id: 2, value: 'Stores information securely' },
      { id: 3, value: 'Track inventory and purchases' },
      { id: 4, value: 'Control client and admin accessibility / limitations' },
    ],
  },
  {
    title: 'React',
    category: 'Frontend Frameworks',
    featured: true,
    description: 'What the users see',
    mainFeatures: [
      { id: 1, value: 'Visually appealing pages' },
      { id: 2, value: 'Smooth user experiences' },
      { id: 3, value: 'Organize website into smaller, reusable components' },
      { id: 4, value: 'Component animations' },
      { id: 5, value: 'Button interactions' },
      { id: 6, value: 'Image styling' },
      { id: 7, value: 'Screen responsiveness' },
    ],
  },
  {
    title: 'Redux / NodeJS',
    category: 'Middleware & Servers',
    featured: false,
    description: 'The bridge of communication that holds everything together',
    mainFeatures: [
      { id: 1, value: 'Retrieve information' },
      { id: 2, value: 'Error & Access handling' },
      { id: 3, value: 'Creation / Management of products and services' },
      { id: 4, value: 'Account / Client management' },
      { id: 5, value: 'Creates the overall functionality of a website' },
      
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-gray-50">
      <div className="relative bg-gradient-to-r from-blue-800 to-teal-700">
        {/* Overlapping background */}
        <div aria-hidden="true" className="absolute bottom-0 hidden h-6 w-full bg-gray-50 lg:block" />

        <div className="relative mx-auto max-w-2xl px-4 pt-16 text-center sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            <span className="block lg:inline">Simple details,</span>
            <span className="block lg:inline mx-2">desired results.</span>
          </h1>
          <p className="mt-4 text-xl text-blue-100">
            Everything you need, nothing you don't.
          </p>
        </div>

        <h2 className="sr-only">Plans</h2>

        {/* Cards */}
        <div className="relative mx-auto mt-8 max-w-2xl px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="absolute inset-0 top-4 bottom-6 left-8 right-8 hidden rounded-tl-lg rounded-tr-lg bg-gradient-to-r from-blue-700 to-teal-600 lg:block"
          />

          <div className="relative space-y-6 lg:grid lg:grid-cols-3 lg:space-y-0">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className={classNames(
                  plan.featured ? 'bg-white ring-2 ring-blue-700 shadow-md' : 'bg-blue-700 lg:bg-transparent',
                  'pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12'
                )}
              >
                <div>
                  <h3
                    className={classNames(plan.featured ? 'text-blue-600' : 'text-white', 'text-base font-semibold mb-1')}
                  >
                    {plan.title}
                  </h3>
                  <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                    <span
                      className={classNames(
                        plan.featured
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-white text-blue-600 hover:bg-blue-50',
                        'w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto md:mt-1 lg:w-full'
                      )}
                    >
                      {plan.category}
                    </span>
                  </div>
                </div>
                <div className=''>
                    <span
                      className={classNames(plan.featured ? 'text-blue-600' : 'text-white text-center', 'flex my-2 text-base font-semibold sm:justify-center md:justify-start lg:justify-center')}
                    >
                      {plan.description}
                    </span>
                  </div>
                <h4 className="sr-only">Features</h4>
                <ul
                  role="list"
                  className={classNames(
                    plan.featured
                      ? 'border-gray-200 divide-gray-200'
                      : 'border-blue-500 divide-blue-500 divide-opacity-75',
                    'mt-7 border-t divide-y lg:border-t-0'
                  )}
                >
                  {plan.mainFeatures.map((mainFeature) => (
                    <li key={mainFeature.id} className="flex items-center py-3">
                      <CheckIcon
                        className={classNames(
                          plan.featured ? 'text-blue-500' : 'text-blue-200',
                          'w-5 h-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                      <span
                        className={classNames(
                          plan.featured ? 'text-gray-600' : 'text-white',
                          'ml-3 text-sm font-medium'
                        )}
                      >
                        {mainFeature.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    
  )
}
