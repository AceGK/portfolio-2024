'use client'
import styles from './Nav.module.scss';
import { useState, useEffect } from 'react';

import Envelope from '../../public/icons/envelope.svg';
import House from '../../public/icons/house.svg';
import User from '../../public/icons/user.svg';
import Layers from '../../public/icons/layers.svg';
import Kanban from '../../public/icons/kanban.svg';


export default function Nav() {

  const sections = ['ace', 'skills', 'projects', 'about', 'contact'];
  const [activeSection, setActiveSection] = useState('ace');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    
    // set active section
    const scrollPosition = window.scrollY;
    const selectedSection = sections.find(sectionID => {
      const el = document.getElementById(sectionID);
      return el && (el.offsetTop - 500) <= scrollPosition && (el.offsetTop + el.offsetHeight) > scrollPosition;
    });
    setActiveSection(selectedSection || 'about');
    setVisible((scrollPosition > currentScrollPos) || currentScrollPos < 10);
    setVisible(lastScrollTop > currentScrollTop || currentScrollTop < 10);
    setLastScrollTop(currentScrollTop);
  };

  // useEffect(() => {
  //   const checkHash = () => {
  //     const hash = window.location.hash.replace('#', '');
  //     if (sections.includes(hash)) {
  //       setActiveSection(hash);
  //     }
  //   };

  //   checkHash();
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [lastScrollTop, visible, handleScroll]);


  return (
    <nav className={styles.nav} style={{ bottom: visible ? '0' : '-100px', transition: 'top 0.3s' }}>
      <ul className={styles.primary}>
        <li>
          <a href="#ace" className={`${activeSection === 'ace' ? styles.active : styles.inactive} code-heading`}>
            <House />
            <span>home</span>
          </a>
        </li>
        <li>
          <a href="#skills" className={`${activeSection === 'skills' ? styles.active : styles.inactive} code-heading`}>
          <Layers />
            <span>skills</span>
          </a>
        </li>
        <li>
          <a href="#projects" className={`${activeSection === 'projects' ? styles.active : styles.inactive} code-heading`}>
          <Kanban />
            <span>projects</span>
          </a>
        </li>
        <li>
          <a href="#about" className={`${activeSection === 'about' ? styles.active : styles.inactive} code-heading`}>
          <User />
            <span>about</span>
          </a>
        </li>
        <li>
          <a href="#contact" className={`${activeSection === 'contact' ? styles.active : styles.inactive} code-heading`}>
            <Envelope />
            <span>contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
