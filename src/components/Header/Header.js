import React, { useState, useEffect } from "react";

import {ThemeProvider} from "styled-components";
import  {useDarkMode} from "../../components/useDarkMode"
import { GlobalStyles } from "../../components/globalStyles";
import { lightTheme, darkTheme } from "../../components/Themes";
import Toggle from "../../components/Toggler";

import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

const Header = () => {
  
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div/>

  return (
    
      <ThemeProvider theme={themeMode}>
        <>
        <GlobalStyles/>
          <header>
            <div className="keeperLogoText">
              <AllInclusiveIcon className="headerIcon" fontSize='large'/>
              <h1>Keeper</h1>
            </div>
            <div>
              <Toggle theme={theme} toggleTheme={themeToggler} /></div>
          </header>
        </>
      </ThemeProvider>
    
  );
}

export default Header;