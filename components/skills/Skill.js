'use client';
import { useState } from "react";

export default function Skill(props) {
  const {
    color,
    children,
    tabIndex,
  } = props; 

  // State to manage hover low effect
  const [isHovered, setIsHovered] = useState(false);

  // Define styles
  const defaultStyle = {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: `var(--clr-${color})`,
    boxShadow: `0 0 0 0rem var(--clr-${color})`,
    cursor: "pointer",
    color: `var(--clr-${color})`,
    // transition: "all 0s"
  };

  const pulse = `
  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 var(--clr-${color}); 
  }
`;

  const hoverStyle = {
    ...defaultStyle,
    boxShadow: `0 0 5px 8px transparent`, 
    animation:"pulse 2s",
    transition: "all 0.8s",
  };


    return (
      <li
        style={isHovered ? hoverStyle : defaultStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        tabIndex={0}
      >
        {children}
      </li>
    );
  
}