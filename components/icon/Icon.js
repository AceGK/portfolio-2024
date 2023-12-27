'use client';
import React, { useState } from "react";
import IcomoonReact from "icomoon-react";
import iconSet from "./selection.json";

export default function Icon(props) {
  const {
    icon,
    color,
    borderColor,
    size = "100%",
    className = "",
    skill,
    children,
  } = props; // Corrected props access

  // State to manage hover effect
  const [isHovered, setIsHovered] = useState(false);

  // Define styles
  const defaultStyle = {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: borderColor,
    boxShadow: `0 0 0 0rem ${borderColor}`,
    cursor: "pointer",
    // transition: "all 0s"
  };

  const pulse = `
  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 ${borderColor}; 
  }
`;

  const hoverStyle = {
    ...defaultStyle,
    boxShadow: `0 0 5px 8px transparent`, 
    animation:"pulse 2s",
    transition: "all 0.8s",
  };


  if (skill) {
    return (
      <li
        style={isHovered ? hoverStyle : defaultStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <IcomoonReact
          className={className}
          iconSet={iconSet}
          color={color}
          size={size}
          icon={icon}
        />
        {children}
      </li>
    );
  } else {
    return (
      <IcomoonReact
        className={className}
        iconSet={iconSet}
        color={color}
        size={size}
        icon={icon}
      >
        {children}
      </IcomoonReact>
    );
  }
}