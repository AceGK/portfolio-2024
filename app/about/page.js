import Nav from "@/components/nav/Nav";
import Card from "@/components/card/Card";
import Link from "next/link";
import Matrix from "@/components/matrix/Matrix";
import styles from "./styles.module.scss";
import Github from "../../public/github.svg";
import LinkedIn from "../../public/linkedin.svg";
import Email from "../../public/envelope.svg";
import Cards from "../../public/cards.svg";

import Icon from "@/components/icon/Icon";

export default function About() {
  return (
    <main className="container" style={{maxWidth:"900px", margin:"auto"}}>
      <div className={styles.hero}>
        <Link href="#">
          <h1 className="fw-700 fs-800 pb-100 code-heading">Ace</h1>
          <h2 className="fw-600 fs-500 pb-100">Software Engineer</h2>
        </Link>
        <p>
          My name is Ace and I&apos;m an experienced fullstack web developer.
          I&apos;m currently working at
          <a href="https://purplelotus.vercel.app"> Purple Lotus</a> in San
          Jose, CA.
        </p>
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
        </ul>
      </div>

      <section>
        <div className={styles.skills}>
          <div>
            <h2 className="code-heading fs-600">Skills</h2>
            <p>My Tech Stack & Skills</p>

              <ul>
                <h3 className="code-heading fs-500">Dev</h3>
                <Icon icon="html5" borderColor="#E34F26" skill><span>HTML5</span></Icon>
                <Icon icon="css3" borderColor="#264DE4" skill><span>CSS3</span></Icon>
                <Icon icon="sass-text" borderColor="#CC6699" skill><span>Sass</span></Icon>
                <Icon icon="javascript" borderColor="#F7DF1E" skill><span>JavaScript</span></Icon>
                <Icon icon="typescript" borderColor="#007ACC" skill><span>TypeScript</span></Icon>
                <Icon icon="jquery" borderColor="#007ACC" skill><span>jQuery</span></Icon>
                <Icon icon="react" borderColor="#61DAFB" skill><span>React</span></Icon>
                <Icon icon="redux" borderColor="#764ABC" skill><span>Redux</span></Icon>
                <Icon icon="next-js" borderColor="#9c9c9c" color="#fff" skill><span>Next.js</span></Icon>
                <Icon icon="node-js" borderColor="#339933" skill><span>Node.js</span></Icon>
                <Icon icon="express" borderColor="#9c9c9c" color="#fff" skill><span>Express</span></Icon>
                <Icon icon="php" borderColor="#777BB4" skill><span>PHP</span></Icon>
              </ul>
            </div>
            <div>
              <ul>
                <h3 className="code-heading fs-500">Design</h3>
                <Icon icon="figma" borderColor="#F24E1E" skill><span>Figma</span></Icon>
                <Icon icon="sketch" borderColor="#FDD231" skill><span>Sketch</span></Icon>
                <Icon icon="adobe-cc" borderColor="#F5090D" skill><span>Adobe CC</span></Icon>
              </ul>

              <ul>
                <h3 className="code-heading fs-500">Data</h3>
                <Icon icon="mysql" borderColor="#5D87A1" skill><span>MySQL</span></Icon>
                <Icon icon="mongodb" borderColor="#47A248" skill><span>MongoDB</span></Icon>
                <Icon icon="firebase" borderColor="#FCCA3F" skill><span>Firebase</span></Icon>
                <Icon icon="aws" borderColor="#FF9900" skill><span>AWS</span></Icon>
                <Icon icon="auth0" borderColor="#EB5424" skill><span>Auth0</span></Icon>
                <Icon icon="algolia" borderColor="#003DFF" skill><span>Algolia</span></Icon>
                <Icon icon="sanity" borderColor="#F03E2F" skill><span>Sanity</span></Icon>
                <Icon icon="wordpress" borderColor="#21759B" skill><span>WordPress</span></Icon>
                <Icon icon="shopify" borderColor="#95BF46" skill><span>Shopify</span></Icon>
              </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="code-heading fs-600">Projects</h2>
      </section>
      <section>
        <h2 className="code-heading fs-600">About</h2>
        <p>
          My journey began in 2014 creating custom websites and plugins as a
          freelance web developer. Since then, I've had the privledge of
          building software for a{" "}
          <a href="https://oaksterdamuniversity.com">university</a>and a{" "}
          <a href="https://plpcsanjose.com">cannabis dispensary</a>.
        </p>

        <p>
          When I&apos;m not coding, I usually spend my time playing guitar,
          hiking, cooking, or learning vintage motorcycle mechanics.
        </p>
      </section>
      <section>
        <h2 className="code-heading fs-600">Contact</h2>
      </section>

      <div className="stars">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>
    </main>
  );
}
