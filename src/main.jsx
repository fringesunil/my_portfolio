import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import AboutmeCard from './components/AboutmeCard';
import ExperienceCard from './components/ExperienceCard';
import SkillsCard from './components/SkillsCard';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <AboutmeCard />,
      },
      {
        path: "/experience",
        element: <ExperienceCard />,
      },
      {
        path: "/skills",
        element: <SkillsCard />,
      },
      {
        path: "/projects",
        element: <ProjectCard />,
      },
      {
        path: "/contact",
        element: <ContactForm />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);