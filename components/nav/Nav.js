'use client'
import styles from './Nav.module.scss';
import { useState, useEffect } from 'react';


export default function Nav() {

  const sections = ['ace', 'skills', 'projects', 'about', 'contact'];
  const [activeSection, setActiveSection] = useState('ace');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const selectedSection = sections.find(sectionID => {
      const el = document.getElementById(sectionID);
      return el && (el.offsetTop - 500) <= scrollPosition && (el.offsetTop + el.offsetHeight) > scrollPosition;
    });
    setActiveSection(selectedSection || 'about');
  };

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (sections.includes(hash)) {
        setActiveSection(hash);
      }
    };

    checkHash();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <nav className={styles.nav}>
      <ul className={styles.primary}>
        <li>
          <a href="#ace" className={`${activeSection === 'ace' ? styles.active : styles.inactive} code-heading`}>Home</a>
        </li>
        <li>
          <a href="#skills" className={`${activeSection === 'skills' ? styles.active : styles.inactive} code-heading`}>skills</a>
        </li>
        <li>
          <a href="#projects" className={`${activeSection === 'projects' ? styles.active : styles.inactive} code-heading`}>projects</a>
        </li>
        <li>
          <a href="#about" className={`${activeSection === 'about' ? styles.active : styles.inactive} code-heading`}>about</a>
        </li>
        <li>
          <a href="#contact" className={`${activeSection === 'contact' ? styles.active : styles.inactive} code-heading`}>contact</a>
        </li>
      </ul>
    </nav>
  );
}
