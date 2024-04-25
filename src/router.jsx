import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import RouteBoundary from './error-boundaries/RouteBoundary'

const router = createBrowserRouter ([
    {
        path: "/portifolio",
        element: <RootLayout />,
        errorElement: <RouteBoundary />,
        children: [
            {index: true, element: <Home />},
            {path: "/portifolio/about", element: <About />, errorElement: <RouteBoundary />},
            {path: "/portifolio/projects", element: <Projects />, errorElement: <RouteBoundary />},
            {path: "/portifolio/skills", element: <Skills />, errorElement: <RouteBoundary />}
        ]
    }
])

export default router