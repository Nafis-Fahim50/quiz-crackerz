import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children:[
        {
          path: '/',
          loader: ()=> fetch(`https://openapi.programming-hero.com/api/quiz`),
          element:<Home></Home>
        },
        {
          path: '/home',
          loader: ()=> fetch(`https://openapi.programming-hero.com/api/quiz`),
          element:<Home></Home>
        },
        {
          path: '/topics',
          loader: ()=> fetch(`https://openapi.programming-hero.com/api/quiz`),
          element:<Home></Home>
        },
        {
          path: '/topics/:topicId',
          loader: async({params}) =>{
            // console.log(params);
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element:<Topics></Topics>
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
    <div className='container mx-auto'>
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
