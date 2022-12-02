import michelle_b from '../assets/images/michelle_b.jpeg'

const Projects = () => {

    const personalProjects = [
        {
            title: 'Better Coaching Services',
            href: 'https://better-coaching-services.vercel.app/',
            category: { name: 'Full-Stack React / Firebase App', href: 'https://github.com/phitdev/coaching-services-app' },
            description:
            'Coaches can register with email and password or Google OAuth, and list coaching services that are organized by category. Users can contact, share a service link, or leave one review per service. ',
            projectImage:'https://media.giphy.com/media/PAH0n7HzShZXG47OI2/giphy.gif',
        },
        {
            title: 'Coach-to-Client Contract Tracking',
            href: 'https://github.com/phitdev/clientTrackingApp',
            category: { name: 'Full-Stack MERN App', href: 'https://github.com/phitdev/clientTrackingApp' },
            description:
            'Serves as a platform for users to send proposals to one another, and track those proposals (via status, and updates/update requests)',
            projectImage:'https://media.giphy.com/media/wkoa8Tc3OCgCuna3QP/giphy.gif',
        },
        {
            title: 'Story Books Blog Site',
            href: 'https://github.com/phitdev/storybooks',
            category: { name: 'MVC, JS, HandleBars App', href: 'https://github.com/phitdev/storybooks' },
            description:
            'Users can log in with google and choose to create, edit, delete or view other users’ stories.',
            projectImage:'https://media.giphy.com/media/L6eFFZJDU5iw2dii5m/giphy.gif',
        },
    ]

    const clients = [
        {
            title: 'A3 Academy',
            href: 'https://github.com/phitdev/a3-ecommerce-test2',
            category: { name: 'Multi-Page Site', href: '#' },
            description:
            'Users can visit the website to obtain information about A3 Academy services, program features, and expert coaches through links to social media profiles. ',
            imageUrl:'https://media.giphy.com/media/PHIdwcuA89fhRWcBQ5/giphy.gif',
            author: {
              name: 'Michelle Blasen',
              href: 'https://www.linkedin.com/in/michelle-blasen-45040ab0/',
              src:{michelle_b},
            },
        },
    ]
  return (
    <>
    {/*
    
      Clients First

    */}
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Client Projects</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Individuals and teams I have worked with directly
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {clients.map((client) => (
            <div key={client.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={client.imageUrl} alt="" />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={client.category.href} className="hover:underline">
                      {client.category.name}
                    </a>
                  </p>
                  <a href={client.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{client.title}</p>
                    <p className="mt-3 text-base text-gray-500">{client.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={client.author.href}>
                      <span className="sr-only">{client.author.name}</span>
                      <img className="h-10 w-10 rounded-full" src={client.author.src} alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={client.author.href} className="hover:underline">
                        {client.author.name}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/*
    
    Personal Projects Second
  
    */}
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Personal Projects</h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              There is nothing else I would do with my free time
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {personalProjects.map((project) => (
              <div key={project.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={project.projectImage} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={project.category.href} className="hover:underline">
                        {project.category.name}
                      </a>
                    </p>
                    <a href={project.href} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">{project.title}</p>
                      <p className="mt-3 text-base text-gray-500">{project.description}</p>
                    </a>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
                </>
          
  )
}

export default Projects
