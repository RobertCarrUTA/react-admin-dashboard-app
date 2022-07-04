import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState (true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [themeSettings, setThemeSettings] = useState(false);
    
    {/* The two lines of code below help allow us to dynamically theme our app */}
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');

    {/* setMode = (e) accepts an event */}
    const setMode = (e) => {
        setCurrentMode(e.target.value);

        {/* When the user comes back, the theme color they last had will be present when they return */}
        localStorage.setItem('themeMode', e.target.value);

        {/* This makes the settings menu close when a setting is picked, maybe remove it later */}
        setThemeSettings(false);
    }

    const setColor = (color) => {
        setCurrentColor(color);

        localStorage.setItem('colorMode', color);

        {/* This makes the settings menu close when a setting is picked, maybe remove it later */}
        setThemeSettings(false);
    }

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true});
    }
    
    return (
        <StateContext.Provider value = {{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            currentColor,
            currentMode,
            themeSettings,
            setThemeSettings,
            setMode,
            setColor
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext (StateContext);
