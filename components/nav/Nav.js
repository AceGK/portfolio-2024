'use client'
import styles from './Nav.module.scss';
import { useState, useEffect } from 'react';
import Github from '../../public/github.svg';
import LinkedIn from '../../public/linkedin.svg';
import Email from '../../public/envelope.svg';
import Link from 'next/link';
import Instagram from '../../public/instagram.svg';
import CV from '@/public/cv.svg';

export default function Nav() {

  const sections = ['about', 'experience', 'projects'];
  const [activeSection, setActiveSection] = useState('about');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const selectedSection = sections.find(sectionID => {
      const el = document.getElementById(sectionID);
      return el && (el.offsetTop - 200) <= scrollPosition && (el.offsetTop + el.offsetHeight) > scrollPosition;
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
          <a href="#about" className={activeSection === 'about' ? styles.active : ''}>about</a>
        </li>
        <li>
          <a href="#experience" className={activeSection === 'experience' ? styles.active : ''}>experience</a>
        </li>
        <li>
          <a href="#projects" className={activeSection === 'projects' ? styles.active : ''}>projects</a>
        </li>
        <li>
          <button onClick={() => document.body.classList.toggle('matrix')}>Wake up</button>
        </li>
      </ul>

      <ul className={styles.social}>
        <li>
          <Link href="https://github.com/aceGK/" passHref>
            <Github />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/acekisch/" passHref>
            <LinkedIn />
          </Link>
        </li>
        <li>
          <Link href="mailto:acekisch@gmail.com" passHref>
            <Email />
          </Link>
        </li>
        {/* <li>
          <Link href="#" passHref>
            <CV />
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}
