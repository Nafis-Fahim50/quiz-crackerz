
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children:[
        {
          path: '/topics', element:<Topics></Topics>
        },
        {
          path: '/statistics', element:<Statistics></Statistics>
        },
        {
          path: '/blog', element:<Blog></Blog>
        },
      ]},
  ])
  
  return (
    <div className=''>
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
