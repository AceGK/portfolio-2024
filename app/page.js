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
    const div1Threshold = 1;
    const div1MaxScroll = 500;

    const div2Threshold = 500;
    const div2MaxScroll = 400;

    const div3Threshold = 920;
    const div3MaxScroll = 400;

    // Add more thresholds and maxScrolls for additional divs if necessary

    const handleScroll = () => {
      const calculateScrollValue = (threshold, maxScroll) => {
        if (window.scrollY > threshold) {
          const scrollBeyondThreshold = window.scrollY - threshold;
          const gradientPercent = Math.min(1, scrollBeyondThreshold / maxScroll);
          return 100 - Math.floor(gradientPercent * 100); // invert the value
        }
        return 100;
      };

      // Calculating scroll values for each div
      const scrollValueDiv1 = calculateScrollValue(div1Threshold, div1MaxScroll);
      const scrollValueDiv2 = calculateScrollValue(div2Threshold, div2MaxScroll);
      const scrollValueDiv3 = calculateScrollValue(div3Threshold, div3MaxScroll);

      // Apply the background image for div1
      const div1 = document.querySelector('.div1 > div');
      if (div1) {
        div1.style.backgroundImage = `linear-gradient(
          0deg,
          rgba(255, 203, 66, 0) ${scrollValueDiv1}%,
          var(--clr-primary) 0%
        )`;
      }

      // Apply the background image for div2
      const div2 = document.querySelector('.div2 > div');
      if (div2) {
        div2.style.backgroundImage = `linear-gradient(
          90deg,
          rgba(255, 203, 66, 0) ${scrollValueDiv2}%,
          var(--clr-primary) 0%
        )`;
      }

      // Apply the background image for div3
      const div3 = document.querySelector('.div3 > div');
      if (div3) {
        div3.style.backgroundImage = `linear-gradient(
          0deg,
          rgba(255, 203, 66, 0) ${scrollValueDiv3}%,
          var(--clr-primary) 100%
        )`;
      }

      // Repeat for additional divs if necessary
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

        <div className="dividers">
          <div className="div1">
            <div />
          </div>
          <div className="div2">
            <div />
          </div>
          <div className="div3">
            <div />
          </div>
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
