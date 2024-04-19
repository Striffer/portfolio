import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

const router = createBrowserRouter ([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {index: true, element: <Home />},
            {path: "/about", element: <About />},
            {path: "/projects", element: <Projects />},
            {path: "/skills", element: <Skills />}
        ]
    }
])

export default router