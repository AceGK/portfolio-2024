import Nav from "@/components/nav/Nav";
import Card from "@/components/card/Card";

export default function Home() {
  return (
    <>
      <header>
        <div>
          <h1 className="fw-700 fs-800 pb-50">Ace Kisch</h1>
          <h2 className="fw-700 fs-500">Software Engineer</h2>
          <p style={{ maxWidth: "300px" }}>I build functional, user-friendly & accessible web applications</p>
        </div>
        <Nav />
      </header>

      <main >

        <section id="about">
          <h2>About</h2>
          <p>Hello, world!</p>
          
          <p>I am a full-stack software engineer with a focus on front-end web development. I currently live in San Jose, California <a href="#">adipisicing elit.</a> Dolores molestias dolor a asperiores! Quos rerum laudantium exercitationem repellat veniam reprehenderit.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio rerum ad vel explicabo quisquam vero. Harum nemo distinctio impedit nobis dignissimos mollitia adipisci alias veritatis eius facilis? Laborum exercitationem maxime consequatur velit dicta voluptas fugit nobis. Quisquam cum earum, a necessitatibus aspernatur facilis aliquid iste molestiae pariatur saepe enim officia.</p>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <ul>
            <li>
              <Card
                caption="2022 - Present"
                title="Purple Lotus"
                subtitle="Senior Software Engineer"
                href="https://purplelotus.vercel.app/"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam quaerat dolore omnis aspernatur unde inventore nisi dolores eos necessitatibus."
                tags={["React", "Next.js", "JavaScript", "Algolia", "SCSS", "Sanity"]}
              />
            </li>
            <li>
              <Card
                caption="2019 - 2022"
                title="Purple Lotus"
                subtitle="Contracted Web Developer"
                href="https://plpcsanjose.com"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam quaerat dolore omnis aspernatur unde inventore nisi dolores eos necessitatibus."
                tags={["WordPress", "PHP", "JavaScript", "HTML", "CSS"]}
              />
            </li>
            <li>
              <Card
                caption="... - ..."
                title="..."
                subtitle="Software Engineer"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam quaerat dolore omnis aspernatur unde inventore nisi dolores eos necessitatibus."
                tags={["React", "Next.js", "JavaScript", "Algolia", "SCSS", "Sanity"]}
              />
            </li>
            <li>
              <Card
                caption="2014 - 2022"
                title="Oaksterdam University"
                subtitle="Software Engineer"
                href="https://oaksterdamuniversity.com"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam quaerat dolore omnis aspernatur unde inventore nisi dolores eos necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam quaerat dolore omnis aspernatur unde inventore nisi dolores eos necessitatibus."
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
                title="Purple Lotus"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam quaerat dolore omnis aspernatur unde inventore nisi dolores eos necessitatibus."
                tags={["React", "Next.js", "JavaScript", "Algolia", "SCSS", "Sanity"]}
              />
            </li>
            <li>
              <Card
                img="https://dummyimage.com/600x400/000/fff"
                title="Tip Calculator"
                body="A vanilla JS tip calculator that evaluates cost per person based on bill amount and tip %"
                tags={["HTML", "CSS", "JS"]}
              />
            </li>
            <li>
              <Card
                img="https://dummyimage.com/600x400/000/fff"
                title="Tip Calculator"
                body="A vanilla JS tip calculator that evaluates cost per person based on bill amount and tip %"
                tags={["HTML", "CSS", "JS"]}
              />
            </li>
            <li>
              <Card
                img="https://dummyimage.com/600x400/000/fff"
                title="Tip Calculator"
                body="A vanilla JS tip calculator that evaluates cost per person based on bill amount and tip %"
                tags={["HTML", "CSS", "JS"]}
              />
            </li>
            <li>
              <Card
                img="https://dummyimage.com/600x400/000/fff"
                title="Tip Calculator"
                body="A vanilla JS tip calculator that evaluates cost per person based on bill amount and tip %"
                tags={["HTML", "CSS", "JS"]}
              />
            </li>
          </ul>
        </section>

        <footer>
          <p>Built with <a href="#">Next.js</a> & hosted on <a href="#">Vercel</a>. View this site on <a href="#">Github</a></p>
        </footer>

      </main>

    </>
  )
}
