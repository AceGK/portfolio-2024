import Link from "next/link";
import Github from "../../public/icons/github.svg";
import LinkedIn from "../../public/icons/linkedin.svg";
import Email from "../../public/icons/envelope.svg";
import styles from "./Ace.module.scss";
import Mouse from "../../public/icons/mouse.svg";
import Image from "next/image";

export default function Ace() {
  return (
    <section id="ace" className={styles.ace}>
      <Image
        src={"/images/headshot.jpg"}
        width={100}
        height={100}
        alt="Picture of Ace"
      />
      <h1 className="fw-700 fs-800 pb-100 code-heading">Ace</h1>
      {/* <h2 className="fw-600 fs-500 pb-100">Software Engineer</h2> */}
      <p>
        Hello! My name is Ace and I&apos;m a full-stack web developer
        located in San Jose,  CA.
      </p>
      {/* <p>
        My name is Ace and I&apos;m an experienced software engineer.
        I&apos;m currently a fullstack web developer at
        <a href="https://purplelotus.vercel.app"> Purple Lotus</a> in San
        Jose, CA.
      </p> */}
      <ul>
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
      </ul>
      <a href="#main-content" className={styles.scroll} id="main-content">
        <Mouse />
      </a>
    </section>
  );
}