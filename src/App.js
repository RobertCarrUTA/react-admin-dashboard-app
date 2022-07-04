import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line } from './pages';

import { useStateContext } from './contexts/ContextProvider';

import './App.css';

const App = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();
  
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      {/* The above line of code allows for the app to switch between light and dark modes */}
      <BrowserRouter>
        <div className = "flex relative dark:bg-main-dark-bg">
          <div className = "fixed right-4 bottom-4" style = {{ zindex: '1000'}}>
            
            {/* Settings Button */}
            <TooltipComponent content= "Settings" position = "Top">
              <button type = "button" className = "text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style = {{ background: currentColor, borderRadius: '50%' }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className = "w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div className = {
            // Use of a template string below makes code shorter while achieving the same outcome
            // When things are partially repetitive (shared classes), use a template string like this to shorten the code
            `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
          }>
            <div className = 'fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>          

          {/* Sidebar routes */}
          <div>
            {/* Theme Component */}
            {themeSettings && <ThemeSettings />}
            
            <Routes>
              {/* Dashboard */}
              <Route path = "/" element = {<Ecommerce/>} />
              <Route path = "/ecommerce" element = {<Ecommerce/>} /> {/* Use ALT + Click to edit multiple lines at once  */}

              {/* Pages */}
              <Route path = "/orders" element = {<Orders/>  } />
              <Route path = "/employees" element = {<Employees/>} />
              <Route path = "/customers" element = {<Customers/>} />
              
              {/* Apps */}
              <Route path = "/calendar" element = {<Calendar/>} />
              <Route path = "/kanban" element = {<Kanban/>} />
              <Route path = "/editor" element = {<Editor/>} />
              <Route path = "/color-picker" element = {<ColorPicker/>} />

              {/* Charts */}
              <Route path = "/line" element = {<Line/>} />
              <Route path = "/area" element = {<Area/>} />
              <Route path = "/bar" element = {<Bar/>} />
              <Route path = "/pie" element = {<Pie/>} />
              <Route path = "/financial" element = {<Financial/>} />
              <Route path = "/color-mapping" element = {<ColorMapping/>} />
              <Route path = "/pyramid" element = {<Pyramid/>} />
              <Route path = "/stacked" element = {<Stacked/>} />
            </Routes>
          </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;