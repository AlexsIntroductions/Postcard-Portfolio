import React from 'react';
import { createRoot } from 'react-dom/client';
import { TabletopExperience } from './webpages/experience-page/TabletopExperience';
import { TabletopHome } from './webpages/home-page/TabletopHome';
import { TabletopProjects } from './webpages/projects-page/TabletopProjects';
import { TabletopContact } from './webpages/contact-page/TabletopContact';

import './index.css';
import { Navbar } from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<TabletopHome />} />
                    <Route path='home' element={<TabletopHome />} />
                    <Route path="experience" element={<TabletopExperience />} />
                    <Route path="projects" element={<TabletopProjects />} />
                    <Route path="contact" element={<TabletopContact />} />
                </Route>
            </Routes>
        </BrowserRouter>
);

//removes my nameplate on mobile devices because its too big to display
//everything comfortably
setTimeout(() => {
    if(window.innerWidth < 600){
    document.getElementsByClassName("base")[0].remove()
}}, 1);
