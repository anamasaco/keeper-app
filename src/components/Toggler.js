import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components";
import "../styles/style.css";

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness5Icon from '@mui/icons-material/Brightness5';

const Button = styled.button`
  
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;
  outline: none;
  }

`;

const Toggle = ({theme,  toggleTheme }) => {
    return (
      <Button className="toggleIcon" onClick={toggleTheme}>
        {theme === "light" ? <Brightness4Icon/> : <Brightness5Icon/>}
      </Button>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;
