import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from "./Components/Blog/Blog";
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Quiz from './Components/Quiz/Quiz';
import Statistics from "./Statistics/Statistics";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [

        {path:'/',
        loader: () => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
        }
        , element:<Home></Home>},
        {path:'quiz', element:<Quiz></Quiz>},
        {path:'statistics', element:<Statistics></Statistics>},
        {path:'blog', element:<Blog></Blog>},
        
      ], element: <Main></Main>
    }
  ])
  return (
    <div data-theme="light">
       <RouterProvider router={router} />


    </div>
  );
}

export default App;
