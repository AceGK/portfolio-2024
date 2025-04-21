'use client';

import { useState, useEffect } from 'react';
import styles from './Projects.module.scss';
import Card from '../card/Card';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { EffectCards, Pagination, Navigation } from 'swiper/modules';

export default function Projects() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isReady, setIsReady] = useState(false); // ✨ Delay render

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsReady(true); // Swiper is client-side only
    }
  }, []);

  const slides = [
    {
      img: '/images/purple-lotus-screenshot.jpg',
      href: 'https://plpcsanjose.com',
      title: 'Purple Lotus',
      body: 'A cannabis dispensary web app that utilizes Next.js & Algolia Instant Search to provide a fast, user-friendly shopping experience.',
      tags: ['Next.js', 'Algolia', 'Sanity CMS', 'AWS Cognito'],
    },
    {
      img: '/images/elementable-screenshot.jpg',
      href: 'https://www.elementable.app/',
      github: 'https://github.com/AceGK/periodic-table',
      title: 'Elementable',
      body: '(Work in progress) An interactive periodic table with detailed information on each element.',
      tags: ['Next.js'],
    },
    {
      img: '/images/ipify-screenshot.jpg',
      href: 'https://ip-tracker-acegk.vercel.app/',
      github: 'https://github.com/AceGK/ip-tracker',
      title: 'IP Address Tracker',
      body: 'View the location, address, timezone, and ISP of any IP address or domain. Built using Next.js, Leaflet.js, and the IPify API.',
      tags: ['Next.js', 'Leaflet.js'],
    },
    {
      img: '/images/tipper-screenshot.jpg',
      href: 'https://tipper-ace.vercel.app/',
      github: 'https://github.com/AceGK/tip-calculator',
      title: 'Tipper',
      body: 'Calculate tip and total per person based on bill amount, tip %, and # of people.',
      tags: ['Next.js','TypeScript']
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2 className="code-heading fs-600 center-text">Projects</h2>

      {isReady && (
        <Swiper
          className={styles.swiper}
          effect="cards"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          cardsEffect={{
            rotate: 30,
            slideShadows: true,
            perSlideOffset: 20,
            perSlideRotate: 6,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCards, Pagination, Navigation]}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className={styles.slide}
              onClick={() => {
                if (swiperInstance?.activeIndex !== index) {
                  swiperInstance.slideTo(index);
                }
              }}
            >
              <Card
                img={slide.img}
                href={slide.href}
                github={slide.github}
                title={slide.title}
                body={slide.body}
                tags={slide.tags}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
