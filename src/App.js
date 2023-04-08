import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Routes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  },[])
  return (
    <div className='overflow-y-hidden overflow-x-hidden'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
