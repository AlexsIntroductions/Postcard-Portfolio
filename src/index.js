import React from 'react';
import { createRoot } from 'react-dom/client';
import { TabletopExperience } from './webpages/experience-page/TabletopExperience';
import { TabletopEducation } from './webpages/education-page/TabletopEducation';
import { TabletopHome } from './webpages/home-page/TabletopHome';
import { TabletopProjects } from './webpages/projects-page/TabletopProjects';
import './index.css';
import { Navbar } from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route path='home' element={<TabletopHome />} />
                    <Route path="experience" element={<TabletopExperience />} />
                    <Route path="education" element={<TabletopEducation />} />
                    <Route path="projects" element={<TabletopProjects />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
);
