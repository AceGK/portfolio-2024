import styles from './Nav.module.scss';
import Github from  '../../public/github.svg';
import LinkedIn from  '../../public/linkedin.svg';
import Email from  '../../public/envelope.svg';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.primary}>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#experience">experience</a>
        </li>
        <li>
          <a href="#projects">projects</a>
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
        <Link href="#" passHref>
          <Email />
          </Link>
          </li>
      </ul>
    </nav>
  );
}
