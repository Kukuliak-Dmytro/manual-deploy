import Home from "./Home"
import Contact from "./Contact"
import Layout from "./Layout"

export const routes =[
    {
      path: "/manual-deploy/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
]
