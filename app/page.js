'use client';
import { useEffect } from 'react';
import Matrix from "@/components/matrix/Matrix";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import About from "@/components/about/About";
import Ace from "@/components/ace/Ace";
import Contact from "@/components/contact/Contact";

import Nav from '@/components/nav/Nav';

export const metadata = {
  title:"Ace Kisch",
  description:"Software Engineer based in San Jose, CA."
}

export default function Home() {

  useEffect(() => {
    const div1Threshold = 0;
    const div1MaxScroll = 400;

    const div2Threshold = 400;
    const div2MaxScroll = 200;

    const div3Threshold = 600;
    const div3MaxScroll = 400;

    const div4Threshold = 1200;
    const div4MaxScroll = 200;

    const div4_2Threshold = 1200;
    const div4_2MaxScroll = 200;

    const div5Threshold = 1400;
    const div5MaxScroll = 200;

    const div5_2Threshold = 1400;
    const div5_2MaxScroll = 200;

    const div6Threshold = 1600;
    const div6MaxScroll = 400;

    const div7Threshold = 2000;
    const div7MaxScroll = 300;

    const div8Threshold = 2300;
    const div8MaxScroll = 200;

    const div9Threshold = 2500;
    const div9MaxScroll = 200;

    const div10Threshold = 2700;
    const div10MaxScroll = 200;

    const div11Threshold = 3000;
    const div11MaxScroll = 200;

    const div12Threshold = 3200;
    const div12MaxScroll = 200;

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
      const scrollValueDiv4_2 = calculateScrollValue(div4_2Threshold, div4_2MaxScroll);
      const scrollValueDiv5_2 = calculateScrollValue(div5_2Threshold, div5_2MaxScroll);
      const scrollValueDiv6 = calculateScrollValue(div6Threshold, div6MaxScroll);
      const scrollValueDiv7 = calculateScrollValue(div7Threshold, div7MaxScroll);
      const scrollValueDiv8 = calculateScrollValue(div8Threshold, div8MaxScroll);
      const scrollValueDiv9 = calculateScrollValue(div9Threshold, div9MaxScroll);
      const scrollValueDiv10 = calculateScrollValue(div10Threshold, div10MaxScroll);
      const scrollValueDiv11 = calculateScrollValue(div11Threshold, div11MaxScroll);
      const scrollValueDiv12 = calculateScrollValue(div12Threshold, div12MaxScroll);

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
          var(--clr-primary) 80%
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

      const div4_2 = document.querySelector('.div4_2 > div');
      if (div4_2) {
        div4_2.style.backgroundImage = `linear-gradient(
          0deg,
          rgba(255, 203, 66, 0) ${scrollValueDiv4_2}%,
          var(--clr-primary) 0%
        )`;
      }

      const div5_2 = document.querySelector('.div5_2 > div');
      if (div5_2) {
        div5_2.style.backgroundImage = `linear-gradient(
          -90deg,
          rgba(255, 203, 66, 0) ${scrollValueDiv5_2}%,
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

      const div10 = document.querySelector('.div10 > div');
      if (div10) {
        div10.style.backgroundImage = `linear-gradient(
          0deg,
          rgba(255, 203, 66, 0) ${scrollValueDiv10}%,
          var(--clr-primary) 0%
        )`;
      }
      const div11 = document.querySelector('.div11 > div');
      if (div11) {
        div11.style.backgroundImage = `linear-gradient(
          -90deg,
          rgba(255, 203, 66, 0) ${scrollValueDiv11}%,
          var(--clr-primary) 0%
        )`;
      }
      const div12 = document.querySelector('.div12 > div');
      if (div12) {
        div12.style.backgroundImage = `linear-gradient(
          0deg,
          rgba(255, 203, 66, 0) ${scrollValueDiv12}%,
          var(--clr-primary) 100%
        )`;
      }


    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>

      {/* <Nav /> */}
      <header>
        <Ace />
      </header>

      <main>

        <Dividers1 />
        <Skills />
        <Dividers2 />
        <Projects />
        <Dividers3 />
        <About />
        <Dividers4 />
        <Contact />

        {/* <Matrix /> */}

        <div className="stars">
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
        </div>

      </main>
    </>
  );
}

function Dividers1() {
  return (
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
  );
}

function Dividers2() {
  return (
    <div className="dividers2">
      <div className="div4">
        <div />
      </div>
      <div className="div4_2">
        <div />
      </div>
      <div style={{ display: 'flex', width: "100%" }}>
        <div className="div5_2">
          <div />
        </div>
        <div className="div5">
          <div />
        </div>
      </div>
      <div className="div6">
        <div />
      </div>
    </div>
  );
}

function Dividers3() {
  return (
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
  );
}

function Dividers4() {
  return (
    <div className="dividers4">
      <div className="div10">
        <div />
      </div>
      <div className="div11">
        <div />
      </div>
      <div className="div12">
        <div />
      </div>
    </div>
  );
}