import Matrix from "@/components/matrix/Matrix";

import Icon from "@/components/icon/Icon";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import About from "@/components/about/About";
import Ace from "@/components/ace/Ace";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className="container">
      <Ace />
      <Skills />
      <Projects />
      <About />
      <Contact />

      <Matrix />

      <div className="stars">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>

    </main>
  );
}
