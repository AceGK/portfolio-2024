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

    const div4Threshold = 920;
    const div4MaxScroll = 400;

    const div5Threshold = 920;
    const div5MaxScroll = 400;

    const div6Threshold = 920;
    const div6MaxScroll = 400;

    const div7Threshold = 2000;
    const div7MaxScroll = 500;

    const div8Threshold = 2500;
    const div8MaxScroll = 400;

    const div9Threshold = 2900;
    const div9MaxScroll = 400;

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
      const scrollValueDiv4 = calculateScrollValue(div4Threshold, div4MaxScroll);
      const scrollValueDiv5 = calculateScrollValue(div5Threshold, div5MaxScroll);
      const scrollValueDiv6 = calculateScrollValue(div6Threshold, div6MaxScroll);
      const scrollValueDiv7 = calculateScrollValue(div7Threshold, div7MaxScroll);
      const scrollValueDiv8 = calculateScrollValue(div8Threshold, div8MaxScroll);
      const scrollValueDiv9 = calculateScrollValue(div9Threshold, div9MaxScroll);

      // Apply the background image for divs
      const div1 = document.querySelector('.div1 > div');
      if (div1) {
        div1.style.backgroundImage = `linear-gradient(
          0deg,
          rgba(255, 203, 66, 0) ${scrollValueDiv1}%,
          var(--clr-primary) 0%
        )`;
      }

      const div2 = document.querySelector('.div2 > div');
      if (div2) {
        div2.style.backgroundImage = `linear-gradient(
          90deg,
          rgba(255, 203, 66, 0) ${scrollValueDiv2}%,
          var(--clr-primary) 0%
        )`;
      }

      const div3 = document.querySelector('.div3 > div');
      if (div3) {
        div3.style.backgroundImage = `linear-gradient(
          0deg,
          rgba(255, 203, 66, 0) ${scrollValueDiv3}%,
          var(--clr-primary) 100%
        )`;
      }

      const div4 = document.querySelector('.div4 > div');
      if (div4) {
        div4.style.backgroundImage = `linear-gradient(
          0deg,
          rgba(255, 203, 66, 0) ${scrollValueDiv4}%,
          var(--clr-primary) 0%
        )`;
      }

      const div5 = document.querySelector('.div5 > div');
      if (div5) {
        div5.style.backgroundImage = `linear-gradient(
          90deg,
          rgba(255, 203, 66, 0) ${scrollValueDiv5}%,
          var(--clr-primary) 0%
        )`;
      }

      const div6 = document.querySelector('.div6 > div');
      if (div6) {
        div6.style.backgroundImage = `linear-gradient(
          0deg,
          rgba(255, 203, 66, 0) ${scrollValueDiv6}%,
          var(--clr-primary) 100%
        )`;
      }

      const div7 = document.querySelector('.div7 > div');
      if (div7) {
        div7.style.backgroundImage = `linear-gradient(
          0deg,
          rgba(255, 203, 66, 0) ${scrollValueDiv7}%,
          var(--clr-primary) 0%
        )`;
      }

      const div8 = document.querySelector('.div8 > div');
      if (div8) {
        div8.style.backgroundImage = `linear-gradient(
          90deg,
          rgba(255, 203, 66, 0) ${scrollValueDiv8}%,
          var(--clr-primary) 0%
        )`;
      }

      const div9 = document.querySelector('.div9 > div');
      if (div9) {
        div9.style.backgroundImage = `linear-gradient(
          0deg,
          rgba(255, 203, 66, 0) ${scrollValueDiv9}%,
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

        <div className="dividers1">
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
        <div className="dividers3">
          <div className="div7">
            <div />
          </div>
          <div className="div8">
            <div />
          </div>
          <div className="div9">
            <div />
          </div>
        </div>
        <About />

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
