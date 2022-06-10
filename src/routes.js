import { Navigate, useRoutes } from 'react-router-dom';
import WebsiteLayout from "./Layout/WebsiteLayout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Burnout from "./pages/Burnout";
import Techstack from "./pages/Techstack";
import Contact from "./pages/Contact";
import Portifolio from "./pages/Portifolio";


export default function Router() {
    return useRoutes([
        {
            path: '',
            element: <WebsiteLayout />,
            children: [
                { path: 'profile', element: <About /> },
                { path: 'blog', element: <Blog/> },
                { path: 'portifolio', element: <Portifolio/> },
                { path: 'techstack', element: <Techstack/> },
                { path: 'burnout', element: <Burnout/> },
                { path: 'contact', element: <Contact/> },
            ],
        }

    ]);
}
