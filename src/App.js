import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css';

const App = () => {
  const activeMenu = true
  
  return (
    <div>
      <BrowserRouter>
        <div classname = "flex relative dark:bg-main-dark-bg">
          <div classname = "fixed right-4 bottom-4" style = {{ zindex: '1000'}}>
            <TooltipComponent content= "Settings" position = "Top">
              <button type = "button" classname = "text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              style = {{ background: 'blue', borderRadius: '50%' }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className = "w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              Sidebar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              Sidebar
            </div>
          )}
          <div className = { {/* is activeMenu true? */}
            // Use of a template string below makes code shorter while achieving the same outcome
            // When things are partially repetitive (shared classes), use a template string like this to shorten the code
            `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
          }>

          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;