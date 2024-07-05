
import styles from "./Skills.module.scss";
import Skill from "./Skill";

import Adobe from "../../public/icons/adobe.svg";
import Html from "../../public/icons/html5.svg";
import Css from "../../public/icons/css3.svg";
import Javascript from "../../public/icons/javascript.svg";
import React from "../../public/icons/react.svg";
import Redux from "../../public/icons/redux.svg";
import Next from "../../public/icons/next-js.svg";
import Node from "../../public/icons/node-js.svg";
import Express from "../../public/icons/express.svg";
import Sass from "../../public/icons/sass.svg";
import Figma from "../../public/icons/figma.svg";
import Sketch from "../../public/icons/sketch.svg";
import Mysql from "../../public/icons/mysql.svg";
import Mongodb from "../../public/icons/mongodb.svg";
import Firebase from "../../public/icons/firebase.svg";
import Aws from "../../public/icons/aws.svg";
import Auth0 from "../../public/icons/auth0.svg";
import Algolia from "../../public/icons/algolia.svg";
import Sanity from "../../public/icons/sanity.svg";
import Wordpress from "../../public/icons/wordpress.svg";
import Shopify from "../../public/icons/shopify.svg";
import Php from "../../public/icons/php.svg";
import Typescript from "../../public/icons/typescript.svg";

export default function Skills() {

  const dev = [
    { color: "html", name: "HTML5", Icon: Html },
    { color: "css", name: "CSS3", Icon: Css },
    { color: "sass", name: "Sass", Icon: Sass },
    { color: "js", name: "JavaScript", Icon: Javascript },
    { color: "ts", name: "TypeScript", Icon: Typescript },
    // { color: "php", name: "PHP", Icon: Php },
    { color: "react", name: "React", Icon: React },
    { color: "next", name: "Next.js", Icon: Next },
    { color: "node", name: "Node.js", Icon: Node },
    { color: "redux", name: "Redux", Icon: Redux },
  ];

  const design = [
    { color: "adobe", name: "Adobe CC", Icon: Adobe },
    { color: "sketch", name: "Sketch", Icon: Sketch },
    { color: "figma", name: "Figma", Icon: Figma },
  ];

  const data = [
    { color: "mysql", name: "MySQL", Icon: Mysql },
    { color: "mongo", name: "MongoDB", Icon: Mongodb },
    { color: "firebase", name: "Firebase", Icon: Firebase },
    { color: "aws", name: "AWS", Icon: Aws },
    { color: "auth0", name: "Auth0", Icon: Auth0 },
    { color: "algolia", name: "Algolia", Icon: Algolia },
    { color: "sanity", name: "Sanity", Icon: Sanity },
    { color: "wordpress", name: "WordPress", Icon: Wordpress },
    { color: "shopify", name: "Shopify", Icon: Shopify },
    // { color: "payload", name: "Payload", Icon: Payload },
  ];

  return (
    <section id="skills" className={`${styles.skills} container`}>

      <div>
        <h2 className="code-heading fs-600">Skills</h2>
        <div className={styles.skillGroup}>
          <h3 className="code-heading fs-500">Dev</h3>
          <ul>
            {dev.map(skill => (
              <Skill color={skill.color} key={skill.name}>
                <span>{skill.name}</span>
                <skill.Icon />
              </Skill>
            ))}
          </ul>

        </div>
      </div>
      <div>
        <div className={styles.skillGroup}>
          <h3 className="code-heading fs-500">Design</h3>
          <ul>
            {design.map(skill => (
              <Skill color={skill.color} key={skill.name}>
                <span>{skill.name}</span>
                <skill.Icon />
              </Skill>
            ))}
          </ul>
        </div>
        <div className={styles.skillGroup}>
          <h3 className="code-heading fs-500">Data</h3>
          <ul>
            {data.map(skill => (
              <Skill color={skill.color} key={skill.name}>
                <span>{skill.name}</span>
                <skill.Icon />
              </Skill>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
