'use client';

import styles from "./Projects.module.scss";
import Card from "../card/Card";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, EffectCards, Pagination, Navigation } from 'swiper/modules';


export default function Projects() {


  return (
    <section id="projects" className={styles.projects}>
      <h2 className="code-heading fs-600 center-text">Projects</h2>
      {/* <div className="center-text">View my projects on <a href="#">Github</a></div> */}
      <Swiper
        className={styles.swiper}
        effect={'cards'}
        // loop={'true'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        cardsEffect={{
          rotate: 30,
          slideShadows: true,
          perSlideOffset: 20,
          perSlideRotate: 6,
        }}
        pagination={true}
        modules={[EffectCards, Pagination, Navigation]}
      >
        <SwiperSlide className={styles.slide}>
          <Card
            img="/images/purple-lotus-screenshot.jpg"
            href="https://purplelotus.vercel.app/"
            title="Cannabis E-commerce"
            body="A cannabis dispensary web app that uses the Jane Roots headless e-commerce platform and Algolia Instant Search to provide a fast, user-friendly shopping experience."
            tags={["Next.js", "Algolia", "Sanity CMS", "AWS Cognito"]}
          />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <Card
            img="/images/tipper-screenshot.jpg"
            title="Tip Calculator"
            href="https://acegk.github.io/tip-calculator/"
            github="https://github.com/AceGK/tip-calculator"
            body="A tip calculator that evaluates the tip and total per person based on the bill amount, tip percentage and number of people."
            tags={["JavaScript"]}
          />
        </SwiperSlide>

        
        <SwiperSlide className={styles.slide}>
          <Card
            img="/images/periodic-table-screenshot.jpg"
            title="Periodic Table"
            href="https://ace-periodic-table.vercel.app/"
            github="https://github.com/AceGK/periodic-table"
            body="An interactive periodic table with detailed information on each element."
            tags={["Next.js"]}
          />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <Card
            img="/images/ipify-screenshot.jpg"
            title="IP Address Tracker"
            href="https://ip-tracker-acegk.vercel.app/"
            github="https://github.com/AceGK/ip-tracker"
            body="View the location, address, timezone, and ISP of any IP address or domain. Built using Next.js, Leaflet.js, and the IPify API."
            tags={["Next.js", "Leaflet.js"]}
          />
        </SwiperSlide>

      </Swiper>
    
    </section>
  );
}
