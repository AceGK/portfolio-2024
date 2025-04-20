import Link from "next/link";
import Github from "../../public/icons/github.svg";
import LinkedIn from "../../public/icons/linkedin.svg";
import Email from "../../public/icons/envelope.svg";
import CV from "../../public/icons/cv.svg";
import styles from "./Ace.module.scss";
import Mouse from "../../public/icons/mouse.svg";
import Image from "next/image";

export default function Ace() {
  const caption = "Hello! My name is Ace and I'm a full-stack web developer located in San Jose, CA.";
  return (
    <section id="ace" className={styles.ace}>
      <Image
        src={"/images/headshot.jpg"}
        width={150}
        height={150}
        alt="Picture of Ace"
      />
      <h1 className="fw-700 fs-800 pb-100 code-heading">Ace</h1>
      <p>
        {caption}
      </p>
      <ul className={styles.icons}>
        <li>
          <Link href="https://github.com/aceGK/" target="_blank" rel="noopener noreferrer">
            <Github />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/acekisch/" target="_blank" rel="noopener noreferrer">
            <LinkedIn />
          </Link>
        </li>
        <li>
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <CV />
          </Link>
        </li>
        {/* <li>
          <Link href="mailto:acekisch@gmail.com">
            <Email />
          </Link>
        </li> */}
      </ul>
      <a href="#main-content" className={styles.scroll} id="main-content">
        <Mouse />
      </a>
    </section>
  );
}