import {
  MagnifyingGlassIcon,
  KeyIcon,
  WrenchIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Progressive',
    description: 'Prioritize appropriately structured goals to consistently move the needle forward',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Hungry',
    description: 'This is my life\'s work just as your business is. I want to digest your needs, and deliver even better results.',
    icon: WrenchIcon,
  },
  {
    name: 'Innovation',
    description: 'I think outside the box in order to bring you creative solutions',
    icon: SparklesIcon,
  },
  {
    name: 'Transparency',
    description: 'The key to any good team is constant communication. I\'ll keep you updated each step of the way.',
    icon: KeyIcon,
  }
]

const Principles = () => {
  return (
        <div className="border-t rounded-t-lg bg-gradient-to-r from-blue-800 to-teal-700">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white">Website support for your improvement and longevity</h2>
            <p className="mt-4 max-w-3xl text-lg text-blue-200">
              I'm all in, all the time. Together, we will make things happen.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name}>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                    <p className="mt-2 text-base text-blue-200">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}

export default Principles