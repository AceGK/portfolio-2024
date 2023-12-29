import Icon from "@/components/icon/Icon";
import styles from "./Skills.module.scss";

export default function Skills() {
  return ( 
    <section id="skills" className={styles.skills}>

          <div>
            <div className="pt-100">
              <h2 className="code-heading fs-600">Skills</h2>
              <span className="fs-500">My Tech Stack</span>
            </div>
            <ul>
              <h3 className="code-heading fs-500">Dev</h3>
              <Icon icon="html5" borderColor="#E34F26" skill><span>HTML5</span></Icon>
              <Icon icon="css3" borderColor="#264DE4" skill><span>CSS3</span></Icon>
              <Icon icon="sass-text" borderColor="#CC6699" skill><span>Sass</span></Icon>
              <Icon icon="javascript" borderColor="#F7DF1E" skill><span>JavaScript</span></Icon>
              {/* <Icon icon="typescript" borderColor="#007ACC" skill><span>TypeScript</span></Icon> */}
              {/* <Icon icon="jquery" borderColor="#007ACC" skill><span>jQuery</span></Icon> */}
              <Icon icon="react" borderColor="#61DAFB" skill><span>React</span></Icon>
              <Icon icon="redux" borderColor="#764ABC" skill><span>Redux</span></Icon>
              <Icon icon="next-js" borderColor="#9c9c9c" color="#fff" skill><span>Next.js</span></Icon>
              <Icon icon="node-js" borderColor="#339933" skill><span>Node.js</span></Icon>
              <Icon icon="express" borderColor="#9c9c9c" color="#fff" skill><span>Express</span></Icon>
              {/* <Icon icon="php" borderColor="#777BB4" skill><span>PHP</span></Icon> */}
            </ul>

          </div>
          <div>
            <ul>
              <h3 className="code-heading fs-500">Design</h3>
              <Icon icon="adobe-cc" borderColor="white" skill><span>Adobe CC</span></Icon>
              <Icon icon="figma" borderColor="#F24E1E" skill><span>Figma</span></Icon>
              <Icon icon="sketch" borderColor="#FDD231" skill><span>Sketch</span></Icon>
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
        </section>
   );
}
