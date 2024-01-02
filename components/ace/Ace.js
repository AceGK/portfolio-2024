import Link from "next/link";
import Github from "../../public/icons/github.svg";
import LinkedIn from "../../public/icons/linkedin.svg";
import Email from "../../public/icons/envelope.svg";
import styles from "./Ace.module.scss";
import Mouse from "../../public/icons/mouse.svg";

export default function Ace() {
  return (
    <section id="ace" className={styles.ace}>
      <h1 className="fw-700 fs-800 pb-100 code-heading">Ace</h1>
      <h2 className="fw-600 fs-500 pb-100">Software Engineer</h2>
      <p>
        My name is Ace and I&apos;m an experienced fullstack web developer.
        I&apos;m currently working at
        <a href="https://purplelotus.vercel.app"> Purple Lotus</a> in San
        Jose, CA.
      </p>
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
      <div className={styles.scroll}>
        <Mouse />
      </div>
    </section>
  );
}