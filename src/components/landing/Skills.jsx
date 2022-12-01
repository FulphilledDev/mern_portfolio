import mongodb from '../../assets/images/mongodb.svg'
import mysql from '../../assets/images/mysql.svg'
import nodejs from '../../assets/images/nodejs.svg'
import react from '../../assets/images/react.svg'
import redux from '../../assets/images/redux.svg'

const Skills = () => {
  return (
    <div>
      {/* Logo cloud */}
          <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-base font-semibold text-gray-500">
                Programming Languages
              </p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src={mongodb} alt="MongoDB" />
                  <span className='text-gray-400 mx-2 flex items-center text-2xl'>MongoDB</span>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src={mysql} alt="MySQL" />
                  <span className='text-gray-400 mx-2 flex items-center text-2xl'>MySQL</span>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src={redux}
                    alt="Redux"
                  />
                  <span className='text-gray-400 mx-2 flex items-center text-2xl'>Redux</span>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src={nodejs}
                    alt="NodeJS"
                  />
                  <span className='text-gray-400 mx-2 flex items-center text-2xl'>NodeJS</span>
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <img
                    className="h-12"
                    src={react}
                    alt="React"
                  />
                  <span className='text-gray-400 mx-2 flex items-center text-2xl'>React</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Skills
