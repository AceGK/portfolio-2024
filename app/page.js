import Nav from "@/components/nav/Nav";
import Card from "@/components/card/Card";

export default function Home() {
  return (
    <>
      <header className="flex">
        <div>
          <h1>Ace Kisch</h1>
          <h2>Software Engineer</h2>
          <p style={{ maxWidth: "350px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quisquam.</p>
        </div>
        <Nav />
      </header>

      <main >

        <section id="about">
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam quaerat dolore omnis aspernatur unde inventore nisi dolores eos necessitatibus.</p>

          <p>Lorem ipsum dolor sit amet consectetur <a href="#">adipisicing elit.</a> Dolores molestias dolor a asperiores! Quos rerum laudantium exercitationem repellat veniam reprehenderit.</p>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <ul>
            <li>
              <Card
                caption="2022 - Present"
                title="Purple Lotus"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam quaerat dolore omnis aspernatur unde inventore nisi dolores eos necessitatibus."
              />
            </li>
            <li>
              <Card
                caption="2014-2022"
                title="Oaksterdam University"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam quaerat dolore omnis aspernatur unde inventore nisi dolores eos necessitatibus."
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
                tags={["React", "Next.js", "JavaScript", "Algolia", "SCSS"]}
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
