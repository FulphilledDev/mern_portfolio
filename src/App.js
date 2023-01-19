import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Main from './pages/Main'
import Projects from './pages/Projects'


function App() {
  return (
    <>
      <Router>
        <div className='h-full mx-auto'>
            <div className='bg-white h-full'>
              <div className='mx-auto h-full max-w-7xl'>
                <div className='z-9 bg-white h-full lg:w-full grid grid-rows-[92px_1fr]'>
                  <main className='mx-auto py-2 max-w-7xl px-4 sm:px-6 sm:py-4 lg:px-8 w-full overflow-auto'>
                    <Header />
                    <Routes>
                      <Route path='/' element={<Main />} exact/>
                      <Route path='/projects' element={<Projects />}/>
                    </Routes>
                  </main>
                </div>
              </div>
            </div>
          </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
