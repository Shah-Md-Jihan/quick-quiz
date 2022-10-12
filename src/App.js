import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AllTopics from './components/AllTopics/AllTopics';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import NotFoundError from './components/NotFoundError/NotFoundError';
import Statistics from './components/Statistics/Statistics';
import TopicDetail from './components/TopicDetail/TopicDetail';
import Main from './layouts/Main';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: 'topics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <AllTopics></AllTopics>
        },
        {
          path: 'topics/:topicId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element: <TopicDetail></TopicDetail>
        },
        {
          path: 'statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: 'blogs',
          element: <Blogs></Blogs>
        },
        {
          path: 'about',
          element: <About></About>
        }
      ]
    },
    {
      path: '*',
      element: <NotFoundError></NotFoundError>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
