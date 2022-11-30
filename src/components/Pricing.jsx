import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'

{/* TODO: Replace/Remove: priceMonthly/Yearly --> startingAt  */}
{/* TODO: Create request form for Single-Page */}
{/* TODO: Create request form for Multi-Page */}
{/* TODO: Create request form for Full-Stack */}
{/* TODO: Create a quote calculator for site request
    -- Include: prices per page, section, functionality, etc. */}




const plans = [
  {
    title: 'Single-Page',
    featured: false,
    description: 'All your essential business information and functionality, to get off to a quick start.',
    startingAt: 249,
    priceMonthly: 5,
    priceYearly: 56,
    mainFeatures: [
      { id: 1, value: 'Basic company information' },
      { id: 2, value: 'Up to 6 Sections' },
      { id: 3, value: 'Purchasability of Products' },
      { id: 4, value: '72-Hour Completion Guarantee' },
      { id: 5, value: '50% Deposit (or $200); Whichever is less' }
    ],
  },
  {
    title: 'Multi-Page',
    featured: true,
    description: 'The best development service for revenue generating businesses.',
    startingAt: 499,
    priceMonthly: 19,
    priceYearly: 220,
    mainFeatures: [
      { id: 1, value: 'Basic company information' },
      { id: 2, value: 'Up to 4 pages' },
      { id: 3, value: 'Purchasability of Products' },
      { id: 4, value: '2-Week Completion Guarantee' },
      { id: 5, value: '25% Deposit (or $300); Whichever is less' },
      { id: 6, value: 'Create and Manage Products and/or Services' },
      { id: 8, value: '30-Days of Website Maintenance' },
    ],
  },
  {
    title: 'Full-Stack',
    featured: false,
    description: 'Convenient features to take your business to the next level.',
    startingAt: 799,
    priceMonthly: 12,
    priceYearly: 140,
    mainFeatures: [
      { id: 1, value: 'Basic company information' },
      { id: 2, value: 'Up to 6 pages' },
      { id: 3, value: 'Purchasability of Products and/or Services' },
      { id: 4, value: '4-Week Completion Guarantee' },
      { id: 5, value: '20% Deposit (or $400); Whichever is more' },
      { id: 6, value: 'Create and Manage Products and/or Services' },
      { id: 7, value: 'Client Account Management' },
      { id: 8, value: '60-Days of Website Maintenance' },
    ],
  },
]
const features = [
  {
    title: 'Basic company information',
    tiers: [
      { title: 'single-page', value: true },
      { title: 'multi-page', featured: true, value: true },
      { title: 'full-stack', value: true },
    ],
  },
  {
    title: 'Mobile and web responsiveness',
    tiers: [
      { title: 'single-page', value: true },
      { title: 'multi-page', featured: true, value: true },
      { title: 'full-stack', value: true },
    ],
  },
  {
    title: 'Purchasability of products/services',
    tiers: [
      { title: 'single-page', value: true },
      { title: 'multi-page', featured: true, value: true },
      { title: 'full-stack', value: true },
    ],
  },
  {
    title: 'Website Pages',
    tiers: [
      { title: 'single-page', value: '1' },
      { title: 'multi-page', featured: true, value: 'Up to 4' },
      { title: 'full-stack', value: 'Up to 7' },
    ],
  },
  {
    title: 'Website maintenenance after completion',
    tiers: [
      { title: 'single-page', value: false },
      { title: 'multi-page', featured: true, value: '30 Days' },
      { title: 'full-stack', value: '60 Days' },
    ],
  },
  {
    title: 'Product / Service management',
    tiers: [
      { title: 'single-page', value: false },
      { title: 'multi-page', featured: true, value: true },
      { title: 'full-stack', value: true },
    ],
  },
  {
    title: 'Client management',
    tiers: [
      { title: 'single-page', value: false },
      { title: 'multi-page', featured: true, value: false },
      { title: 'full-stack', value: true },
    ],
  },
]
const perks = [
  {
    title: '24/7 customer support',
    tiers: [
      { title: 'single-page', value: true },
      { title: 'multi-page', featured: true, value: true },
      { title: 'full-stack', value: true },
    ],
  },
  {
    title: 'Weekly updates',
    tiers: [
      { title: 'single-page', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'full-stack', value: true },
    ],
  },
  {
    title: 'Digital receipts',
    tiers: [
      { title: 'single-page', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'full-stack', value: true },
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
            <span className="block lg:inline">Simple pricing,</span>
            <span className="block lg:inline mx-2">desired results.</span>
          </h1>
          <p className="mt-4 text-xl text-blue-100">
            Everything you need, nothing you don't. Pick a plan that best suits your business.
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
                    className={classNames(plan.featured ? 'text-blue-600' : 'text-white', 'text-base font-semibold')}
                  >
                    {plan.title}
                  </h3>
                  <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                    <div className="mt-3 flex items-end">
                      <p
                        className={classNames(
                          plan.featured ? 'text-blue-600' : 'text-white',
                          'text-4xl font-bold tracking-tight'
                        )}
                      >
                        ${plan.startingAt}
                      </p>
                      <div className="ml-4">
                        <p className={classNames(plan.featured ? 'text-gray-700' : 'text-white', 'text-sm')}>
                          USD
                        </p>
                      </div>
                    </div>
                    <a
                      href="#"
                      className={classNames(
                        plan.featured
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-white text-blue-600 hover:bg-blue-50',
                        'mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full'
                      )}
                    >
                      Request {plan.title}
                    </a>
                  </div>
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

      {/* Feature comparison (up to lg) */}
      <section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
        <h2 id="mobile-comparison-heading" className="sr-only">
          Feature comparison
        </h2>

        <div className="mx-auto max-w-2xl space-y-16 py-16 px-4 sm:px-6">
          {plans.map((plan, mobilePlanIndex) => (
            <div key="plan.title" className="border-t border-gray-200">
              <div
                className={classNames(
                  plan.featured ? 'border-blue-600' : 'border-transparent',
                  '-mt-px pt-6 border-t-2 sm:w-1/2'
                )}
              >
                <h3 className={classNames(plan.featured ? 'text-blue-600' : 'text-gray-900', 'text-sm font-bold')}>
                  {plan.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
              </div>
              <h4 className="mt-10 text-sm font-bold text-gray-900">Catered for business</h4>

              <div className="relative mt-6">
                {/* Fake card background */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                  <div
                    className={classNames(
                      plan.featured ? 'shadow-md' : 'shadow',
                      'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                    )}
                  />
                </div>

                <div
                  className={classNames(
                    plan.featured ? 'ring-2 ring-blue-600 shadow-md' : 'ring-1 ring-black ring-opacity-5 shadow',
                    'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
                  )}
                >
                  <dl className="divide-y divide-gray-200">
                    {features.map((feature) => (
                      <div
                        key={feature.title}
                        className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2"
                      >
                        <dt className="pr-4 text-sm font-medium text-gray-600">{feature.title}</dt>
                        <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                          {typeof feature.tiers[mobilePlanIndex].value === 'string' ? (
                            <span
                              className={classNames(
                                feature.tiers[mobilePlanIndex].featured ? 'text-blue-600' : 'text-gray-900',
                                'text-sm font-medium'
                              )}
                            >
                              {feature.tiers[mobilePlanIndex].value}
                            </span>
                          ) : (
                            <>
                              {feature.tiers[mobilePlanIndex].value === true ? (
                                <CheckIcon className="mx-auto h-5 w-5 text-blue-600" aria-hidden="true" />
                              ) : (
                                <XMarkIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                              )}

                              <span className="sr-only">
                                {feature.tiers[mobilePlanIndex].value === true ? 'Yes' : 'No'}
                              </span>
                            </>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Fake card border */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                  <div
                    className={classNames(
                      plan.featured ? 'ring-2 ring-blue-600' : 'ring-1 ring-black ring-opacity-5',
                      'absolute right-0 w-1/2 h-full rounded-lg'
                    )}
                  />
                </div>
              </div>

              <h4 className="mt-10 text-sm font-bold text-gray-900">Other perks</h4>

              <div className="relative mt-6">
                {/* Fake card background */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                  <div
                    className={classNames(
                      plan.featured ? 'shadow-md' : 'shadow',
                      'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                    )}
                  />
                </div>

                <div
                  className={classNames(
                    plan.featured ? 'ring-2 ring-blue-600 shadow-md' : 'ring-1 ring-black ring-opacity-5 shadow',
                    'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
                  )}
                >
                  <dl className="divide-y divide-gray-200">
                    {perks.map((perk) => (
                      <div key={perk.title} className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">{perk.title}</dt>
                        <dd className="text-center sm:px-4">
                          {perk.tiers[mobilePlanIndex].value === true ? (
                            <CheckIcon className="mx-auto h-5 w-5 text-blue-600" aria-hidden="true" />
                          ) : (
                            <XMarkIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                          )}

                          <span className="sr-only">{perk.tiers[mobilePlanIndex].value === true ? 'Yes' : 'No'}</span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Fake card border */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                  <div
                    className={classNames(
                      plan.featured ? 'ring-2 ring-blue-600' : 'ring-1 ring-black ring-opacity-5',
                      'absolute right-0 w-1/2 h-full rounded-lg'
                    )}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature comparison (lg+) */}
      <section aria-labelledby="comparison-heading" className="hidden lg:block">
        <h2 id="comparison-heading" className="sr-only">
          Feature comparison
        </h2>

        <div className="mx-auto max-w-7xl py-24 px-8">
          <div className="flex w-full items-stretch border-t border-gray-200">
            <div className="-mt-px flex w-1/4 items-end py-6 pr-4">
              <h3 className="mt-auto text-sm font-bold text-gray-900">Catered for business</h3>
            </div>
            {plans.map((plan, planIdx) => (
              <div
                key={plan.title}
                aria-hidden="true"
                className={classNames(planIdx === plans.length - 1 ? '' : 'pr-4', '-mt-px pl-4 w-1/4')}
              >
                <div
                  className={classNames(plan.featured ? 'border-blue-600' : 'border-transparent', 'py-6 border-t-2')}
                >
                  <p className={classNames(plan.featured ? 'text-blue-600' : 'text-gray-900', 'text-sm font-bold')}>
                    {plan.title}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            {/* Fake card backgrounds */}
            <div className="pointer-events-none absolute inset-0 flex items-stretch" aria-hidden="true">
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg bg-white shadow" />
              </div>
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg bg-white shadow-md" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="h-full w-full rounded-lg bg-white shadow" />
              </div>
            </div>

            <table className="relative w-full">
              <caption className="sr-only">Business feature comparison</caption>
              <thead>
                <tr className="text-left">
                  <th scope="col">
                    <span className="sr-only">Feature</span>
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.title} scope="col">
                      <span className="sr-only">{plan.title} plan</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {features.map((feature) => (
                  <tr key={feature.title}>
                    <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                      {feature.title}
                    </th>
                    {feature.tiers.map((tier, tierIdx) => (
                      <td
                        key={tier.title}
                        className={classNames(
                          tierIdx === feature.tiers.length - 1 ? 'pl-4' : 'px-4',
                          'relative w-1/4 py-0 text-center'
                        )}
                      >
                        <span className="relative h-full w-full py-3">
                          {typeof tier.value === 'string' ? (
                            <span
                              className={classNames(
                                tier.featured ? 'text-blue-600' : 'text-gray-900',
                                'text-sm font-medium'
                              )}
                            >
                              {tier.value}
                            </span>
                          ) : (
                            <>
                              {tier.value === true ? (
                                <CheckIcon className="mx-auto h-5 w-5 text-blue-600" aria-hidden="true" />
                              ) : (
                                <XMarkIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                              )}

                              <span className="sr-only">{tier.value === true ? 'Yes' : 'No'}</span>
                            </>
                          )}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Fake card borders */}
            <div className="pointer-events-none absolute inset-0 flex items-stretch" aria-hidden="true">
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg ring-2 ring-blue-600 ring-opacity-100" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
            </div>
          </div>

          <h3 className="mt-10 text-sm font-bold text-gray-900">Other perks</h3>

          <div className="relative mt-6">
            {/* Fake card backgrounds */}
            <div className="pointer-events-none absolute inset-0 flex items-stretch" aria-hidden="true">
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg bg-white shadow" />
              </div>
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg bg-white shadow-md" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="h-full w-full rounded-lg bg-white shadow" />
              </div>
            </div>

            <table className="relative w-full">
              <caption className="sr-only">Perk comparison</caption>
              <thead>
                <tr className="text-left">
                  <th scope="col">
                    <span className="sr-only">Perk</span>
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.title} scope="col">
                      <span className="sr-only">{plan.title} plan</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {perks.map((perk) => (
                  <tr key={perk.title}>
                    <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                      {perk.title}
                    </th>
                    {perk.tiers.map((tier, tierIdx) => (
                      <td
                        key={tier.title}
                        className={classNames(
                          tierIdx === perk.tiers.length - 1 ? 'pl-4' : 'px-4',
                          'relative w-1/4 py-0 text-center'
                        )}
                      >
                        <span className="relative h-full w-full py-3">
                          {tier.value === true ? (
                            <CheckIcon className="mx-auto h-5 w-5 text-blue-600" aria-hidden="true" />
                          ) : (
                            <XMarkIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                          )}

                          <span className="sr-only">{tier.value === true ? 'Yes' : 'No'}</span>
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Fake card borders */}
            <div className="pointer-events-none absolute inset-0 flex items-stretch" aria-hidden="true">
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg ring-2 ring-blue-600 ring-opacity-100" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    
  )
}
