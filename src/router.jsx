import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

const router = createBrowserRouter ([
    {
        path: "/portifolio",
        element: <RootLayout />,
        children: [
            {index: true, element: <Home />},
            {path: "/portifolio/about", element: <About />},
            {path: "/portifolio/projects", element: <Projects />},
            {path: "/portifolio/skills", element: <Skills />}
        ]
    }
])

export default router