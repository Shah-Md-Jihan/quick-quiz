import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AllTopics from './components/AllTopics/AllTopics';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import TopicDetail from './components/TopicDetail/TopicDetail';
import Topics from './components/Topics/Topics';
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
          element: <Statistics></Statistics>
        },
        {
          path: 'blogs',
          element: <Blogs></Blogs>
        }
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
