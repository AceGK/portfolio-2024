import Nav from "@/components/nav/Nav";
import Card from "@/components/card/Card";
import Link from "next/link";
import Matrix from "@/components/matrix/Matrix";

export default function Home() {
  return (
    <>
      <header>

        <Link href="#"><h1 className="fw-700 fs-800 pb-50">Ace Kisch</h1></Link>
        <h2 className="fw-600 fs-500 pb-50">Software Engineer</h2>

        <Nav />
      </header>

      <main
      // className="bottom-fade" //broken w stars bg
      >
        <section id="about" className="about">
          <h2>About</h2>
          <div className="bio">
   
            <p>My name is Ace and I&apos;m an experienced front-end software engineer. My journey began in 2014 building custom website themes and plugins for a <a href="https://oaksterdamuniversity.com">university</a>. I&apos;m currently building software solutions for a <a href="https://plpcsanjose.com">cannabis dispensary</a> in San Jose, CA.
            </p>

            <p>I am focused on building accessible and performant full-stack web applications. In my free time I am often working on side projects, improving my skills, or experimenting with new or unfamiliar technologies. When I&apos;m not coding I usually spend my time building PCs or learning about motorcycle mechanics.</p>

            {/* <p>My name is Ace and I am an experienced front-end software engineer. My journey began in 2013 learning to create custom plugins and websites for myself and local businesses. Since then, I&apos;ve had the privilege of building software for several startups, a <a href="https://oaksterdamuniversity.com">university</a>, and a <a href="https://plpcsanjose.com">cannabis dispensary</a>.
            </p> 

            <p>Currently, I&apos;m building software solutions at <a href="https://plpcsanjose.com">Purple Lotus</a>, a dispensary in San Jose, CA. I am focused on building accessible and performant full-stack web applications.</p>*/}

          </div>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <ul>
            <li>
              <Card
                caption="2022 — Present"
                title="Purple Lotus"
                subtitle="Senior Software Engineer"
                href="https://purplelotus.vercel.app/"
                body="Built a cannabis dispensary e-commerce web app using Next.js, Algolia Instant Search, Sanity CMS and several third party APIs. Improved SEO, performance, PageSpeed Insight scores, and UI/UX."
                tags={["React", "Next.js", "Algolia", "Sanity", "SCSS"]}
              />
            </li>
            <li>
              <Card
                caption="2019 — 2022"
                title="Purple Lotus"
                subtitle="Contracted Web Developer"
                href="https://plpcsanjose.com"
                body="Rebuilt, redesigned and helped maintain a cannabis dispensary WordPress site. Developed a custom theme, plugins and integrations with third-party services."
                tags={["WordPress", "PHP", "JavaScript", "HTML", "CSS"]}
              />
            </li>
            <li>
              <Card
                caption="2014 — 2022"
                title="Oaksterdam University"
                subtitle="Software Engineer & IT Manager"
                href="https://oaksterdamuniversity.com"
                body="Developed a suite of web services including a CMS, LMS, e-commerce, user authentication and SSO, marketing and support automation, SEO tracking and tools, VoIP, live chat, an improved hosting platform and site version control. I also managed the IT department and provided technical support for staff and students."
                tags={["WordPress", "PHP", "JavaScript", "HTML", "CSS"]}
              />
            </li>
          </ul>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <Card
                img="https://dummyimage.com/600x400/000/fff"
                href="https://purplelotus.vercel.app/"
                title="Dispensary e-commerce"
                body="A cannabis dispensary web app that uses the Jane Roots headless e-commerce platform and Algolia Instant Search to provide a fast, user-friendly shopping experience."
                tags={["Next.js", "Algolia", "Sanity", "SCSS"]}
              />
            </li>
            <li>
              <Card
                img="https://dummyimage.com/600x400/000/fff"
                title="Periodic Table"
                href="https://ace-periodic-table.vercel.app/"
                body="An interactive periodic table with detailed information on each element."
                tags={["Next.js", "SCSS"]}
              />
            </li>
            <li>
              <Card
                img="https://dummyimage.com/600x400/000/fff"
                title="Tip Calculator"
                href="https://acegk.github.io/tip-calculator/"
                body="A tip calculator that evaluates the tip and total per person based on the bill amount, tip percentage and number of people."
                tags={["HTML", "CSS", "JavaScript"]}
              />
            </li>
            <li>
              <Card
                img="https://dummyimage.com/600x400/000/fff"
                title="Delivery Zipcode Map"
                href="https://acegk.github.io/"
                body="An interactive map that highlights Bay Area zipcodes for displaying delivery zones."
                tags={["Next.js", "Leaflet.js", "SCSS"]}
              />
            </li>
            <li>
              <Card
                img="https://dummyimage.com/600x400/000/fff"
                title="Lorem ipsum"
                href="https://acegk.github.io/"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio rerum ad vel explicabo quisquam vero. Harum nemo distinctio. Dolores molestias dolor a asperiores"
                tags={["HTML", "CSS", "JavaScript"]}
              />
            </li>

          </ul>
        </section>

        <footer>
          <span>Built with <a href="https://nextjs.org/">Next.js</a> & hosted on <a href="https://vercel.com/">Vercel</a>. View this site on <a href="https://github.com/AceGK/portfolio-2024">Github</a></span>
          
        <Matrix />

        </footer>
      </main>
      <div className="stars">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>
    </>
  )
}
