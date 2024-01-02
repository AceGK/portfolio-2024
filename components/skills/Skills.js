
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


export default function Skills() {
  return ( 
    <section id="skills" className={styles.skills}>

          <div>
            <div className="pt-100">
              <h2 className="code-heading fs-600">Skills</h2>
            </div>
            <ul>
              <h3 className="code-heading fs-500">Dev</h3>
              <Skill color="html">
                <span>HTML5</span>
                <Html />
              </Skill>
              <Skill color="css">
                <span>CSS3</span>
                <Css />
              </Skill>
              <Skill color="js">
                <span>JavaScript</span>
                <Javascript />
              </Skill>
              <Skill color="react">
                <span>React</span>
                <React />
              </Skill>
              <Skill color="redux">
                <span>Redux</span>
                <Redux />
              </Skill>
              <Skill color="next">
                <span>Next.js</span>
                <Next />
              </Skill>
              <Skill color="node">
                <span>Node.js</span>
                <Node />
              </Skill>
              <Skill color="express">
                <span>Express</span>
                <Express />
              </Skill>
              <Skill color="sass">
                <span>Sass</span>
                <Sass />
              </Skill>
            
            </ul>

          </div>
          <div>
            <ul>
              <h3 className="code-heading fs-500">Design</h3>
              <Skill color="adobe">
                <span>Adobe CC</span>
                <Adobe />
              </Skill>
              <Skill color="sketch">
                <span>Sketch</span>
                <Sketch />
              </Skill>
              <Skill color="figma">
                <span>Figma</span>
                <Figma />
              </Skill>
            </ul>

            <ul>
              <h3 className="code-heading fs-500">Data</h3>
              <Skill color="mysql">
                <span>MySQL</span>
                <Mysql />
              </Skill>
              <Skill color="mongo">
                <span>MongoDB</span>
                <Mongodb />
              </Skill>
              <Skill color="firebase">
                <span>Firebase</span>
                <Firebase />
              </Skill>
              <Skill color="aws">
                <span>AWS</span>
                <Aws />
              </Skill>
              <Skill color="auth0">
                <span>Auth0</span>
                <Auth0 />
              </Skill>
              <Skill color="algolia">
                <span>Algolia</span>
                <Algolia />
              </Skill>
              <Skill color="sanity">
                <span>Sanity</span>
                <Sanity />
              </Skill>
              <Skill color="wordpress">
                <span>WordPress</span>
                <Wordpress />
              </Skill>
              <Skill color="shopify">
                <span>Shopify</span>
                <Shopify />
              </Skill>
            </ul>

          </div>
        </section>
   );
}
