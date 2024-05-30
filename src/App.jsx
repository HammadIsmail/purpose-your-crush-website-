import HeartBeat from "./components/HeartBeat"
import Letter from "./components/Letter";
import No from "./components/No";
import Yes from "./components/Yes";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
export default function App() {
  const router = createBrowserRouter([
    {
        path:"/",
        element:<HeartBeat/>
    },
    {
        path:"/letter",
        element:<Letter/>
    },
      {
        path:"/no",
        element:<No/>
    },
    {
      path:"/yes",
      element:<Yes/>
  }
])
  return (
  <>
          <RouterProvider router={router}/>
  </>
  )
}