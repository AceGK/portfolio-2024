import Nav from "@/components/nav/Nav";
import Card from "@/components/card/Card";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <div>
          <Link href="#"><h1 className="fw-700 fs-800 pb-50">Ace Kisch</h1></Link>
          <h2 className="fw-600 fs-500">Software Engineer</h2>
          {/* <p style={{ maxWidth: "300px" }}>I build functional, user-friendly & accessible web applications</p> */}
        </div>
        <Nav />
      </header>

      <main className="bottom-fade" >

        <section id="about" className="about">
          <h2 className="full-bleed">About</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio rerum ad vel explicabo quisquam vero. Harum nemo distinctio. Dolores molestias dolor a asperiores <a href="#">adipisicing elit.</a> Quos rerum laudantium exercitationem repellat veniam reprehenderit.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio rerum ad vel explicabo quisquam vero. Harum nemo distinctio impedit nobis <a href="#">dignissimos mollitia</a> adipisci <a href="#">alias veritatis</a> eius facilis Laborum exercitationem velit dicta voluptas <a href="#">maxime consequatur</a>. Quisquam cum earum, a necessitatibus aspernatur facilis aliquid iste molestiae pariatur saepe enim officia.</p>
        </section>

        <section id="experience">
          <h2 className="full-bleed">Experience</h2>
          <ul>
            <li>
              <Card
                caption="2022 — Present"
                title="Purple Lotus"
                subtitle="Senior Software Engineer"
                href="https://purplelotus.vercel.app/"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam quaerat dolore omnis aspernatur unde inventore nisi dolores eos necessitatibus."
                tags={["React", "Next.js", "JavaScript", "Algolia", "SCSS", "Sanity"]}
              />
            </li>
            <li>
              <Card
                caption="2019 — 2022"
                title="Purple Lotus"
                subtitle="Contracted Web Developer"
                href="https://plpcsanjose.com"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam quaerat dolore omnis aspernatur unde inventore nisi dolores eos necessitatibus."
                tags={["WordPress", "PHP", "JavaScript", "HTML", "CSS"]}
              />
            </li>
            <li>
              <Card
                caption="2014 — 2022"
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
          <h2 className="full-bleed">Projects</h2>
          <ul>
            <li>
              <Card
                img="https://dummyimage.com/600x400/000/fff"
                href="https://purplelotus.vercel.app/"
                title="Purple Lotus"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam quaerat dolore omnis aspernatur unde inventore nisi dolores eos necessitatibus."
                tags={["React", "Next.js", "JavaScript", "Algolia", "SCSS", "Sanity"]}
              />
            </li>
            <li>
              <Card
                img="https://dummyimage.com/600x400/000/fff"
                title="Tip Calculator"
                href="https://acegk.github.io/tip-calculator/"
                body="A vanilla JS tip calculator that evaluates cost per person based on bill amount and tip %"
                tags={["HTML", "CSS", "JavaScript"]}
              />
            </li>
            <li>
              <Card
                img="https://dummyimage.com/600x400/000/fff"
                title="Tip Calculator"
                href="https://acegk.github.io/tip-calculator/"
                body="A vanilla JS tip calculator that evaluates cost per person based on bill amount and tip %"
                tags={["HTML", "CSS", "JavaScript"]}
              />
            </li>
            <li>
              <Card
                img="https://dummyimage.com/600x400/000/fff"
                title="Tip Calculator"
                href="https://acegk.github.io/tip-calculator/"
                body="A vanilla JS tip calculator that evaluates cost per person based on bill amount and tip %"
                tags={["HTML", "CSS", "JavaScript"]}
              />
            </li>
          
          </ul>
        </section>

        <footer className="pb-600 mb-600">
          <p>Built with <a href="#">Next.js</a> & hosted on <a href="#">Vercel</a>. View this site on <a href="#">Github</a></p>
        </footer>

      </main>

    </>
  )
}
