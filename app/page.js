'use client';
import React, { useEffect } from 'react';
import Matrix from "@/components/matrix/Matrix";
import Icon from "@/components/icon/Icon";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import About from "@/components/about/About";
import Ace from "@/components/ace/Ace";
import Contact from "@/components/contact/Contact";

export default function Home() {

  useEffect(() => {
    const scrollThreshold = 1; // pixels after which the gradient starts changing
    const maxScrollForGradient = 500; // total scroll length over which gradient changes
  
    const handleScroll = () => {
      let scrollValue = 100; // start with the maximum value
      if (window.scrollY > scrollThreshold) {
        const scrollBeyondThreshold = window.scrollY - scrollThreshold;
        const gradientPercent = Math.min(1, scrollBeyondThreshold / maxScrollForGradient);
        scrollValue = 100 - Math.floor(gradientPercent * 100); // invert the value
      }
  
      const div1 = document.querySelector('.div1 > div');
      if (div1) {
        div1.style.backgroundImage = `linear-gradient(
          0deg,
          transparent ${scrollValue}%,
          var(--clr-primary) 100%
        )`;
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header>
        <Ace />
      </header>

      <main className="container">

        <div className="div1">
          <div />
        </div>
        <div className="div2">
          <div />
        </div>
        <div className="div3">
          <div />
        </div>

        <Skills />
        <div className="div4">
          <div />
        </div>
        <div className="div5">
          <div />
        </div>
        <div className="div6">
          <div />
        </div>
        <Projects />
        <div className="div7">
          <div />
        </div>
        <About />
        <div className="div8">
          <div />
        </div>
        <div className="div9">
          <div />
        </div>
        <div className="div10">
          <div />
        </div>
        <Contact />

        <Matrix />

        <div className="stars">
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
        </div>

      </main>
    </>
  );
}
