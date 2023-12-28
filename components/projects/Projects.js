'use client';

import Icon from "@/components/icon/Icon";
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
      <h2 className="code-heading fs-600 center-text mb-200">Projects</h2>
      <div className="center-text">View my projects on <a href="#">Github</a></div>
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
            img="/purple-lotus-screenshot.jpg"
            // href="https://purplelotus.vercel.app/"
            title="Cannabis E-commerce"
            body="A cannabis dispensary web app that uses the Jane Roots headless e-commerce platform and Algolia Instant Search to provide a fast, user-friendly shopping experience."
            tags={["Next.js", "Algolia", "Sanity", "Leaflet.js", "SCSS"]}
          />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <Card
            img="/periodic-table-screenshot.jpg"
            title="Periodic Table"
            // href="https://ace-periodic-table.vercel.app/"
            body="An interactive periodic table with detailed information on each element."
            tags={["Next.js", "SCSS"]}
          />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <Card
            img="/tipper-screenshot.jpg"
            title="Tip Calculator"
            // href="https://acegk.github.io/tip-calculator/"
            body="A tip calculator that evaluates the tip and total per person based on the bill amount, tip percentage and number of people."
            tags={["HTML", "CSS", "JavaScript"]}
          />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <Card
            img="/ipify-screenshot.jpg"
            title="IP Address Tracker"
            // href="https://ip-tracker-acegk.vercel.app/"
            body="View the address, timezone, and ISP of any IP address or domain. Built using the IPify API and Leaflet.js."
            tags={["Next.js", "Leaflet.js", "SCSS"]}
          />
        </SwiperSlide>

      </Swiper>
    
    </section>
  );
}
