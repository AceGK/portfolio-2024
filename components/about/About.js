'use client';

import Image from "next/image";
import styles from "./About.module.scss";
import { useRef, useState, useEffect } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import ArrowRight from "../../public/icons/arrow-right.svg";
import ArrowLeft from "../../public/icons/arrow-left.svg";


export default function About() {
  const bioSwiper = useRef(null);
  const photoSwiper = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const bioSlides = [
    "My career began in 2014 building web applications for local businesses and non-profits. However, my interest in computers began in my early childhood.",
    "My interests outside computers include photography, painting, design, reading, guitar, cooking, hiking/camping, and motorcycle mechanics.",
    "I love fantasy, sci-fi, and horror books, movies, and games. Some of my favorite authors include J.R.R. Tolkien, H.P. Lovecraft, and Dan Abnett.",
    // "I love fantasy, sci-fi, and horror books, movies, and games. I&apos;ve left a few easter eggs of some of my favorite throughout this site! Can you find them?"
  ];
  const photos = [
    { src: "/images/ace-and-dad.jpg", alt: "Ace and dad", caption: "My dad introducing me to computers" },
    { src: "/images/mugen.jpg", alt: "Mugen, the cat", caption: "My cat, Mugen" },
    { src: "/images/sci-fi-portrait.jpg", alt: "Sci-fi portrait of Ace", caption: "AI generated with Stable Diffusion/A1111" },
  ]

  useEffect(() => {
    if (bioSwiper.current) {
      // Update total slides
      setTotalSlides(bioSwiper.current.slides.length);

      // Add event listener for slide change
      const swiperInstance = bioSwiper.current;
      swiperInstance.on('slideChange', () => {
        setCurrentIndex(swiperInstance.activeIndex);
      });

      return () => {
        // Cleanup
        swiperInstance.off('slideChange');
      };
    }
  }, [bioSwiper]);

  return (
    <section id="about" className={`${styles.about} container`}>


      <h2 className={`${styles.title} code-heading fs-600`}>About</h2>

      <div className={styles.bioWrapper}>
        <Swiper
          onSwiper={(swiper) => (bioSwiper.current = swiper)}
          onSlideChange={() => {
            setCurrentIndex(bioSwiper.current.activeIndex);
            photoSwiper.current.slideTo(bioSwiper.current.activeIndex);
          }
          }
          className={styles.bioSwiper}
          grabCursor={true}
          navigation={{
            prevEl: `#about-prev`,
            nextEl: `#about-next`,
            clickable: true,
          }}
          slidesPerView={1}
          spaceBetween={40}
          modules={[Navigation]}
        >
          {bioSlides.map((text, index) => (
            <SwiperSlide className={styles.slide} key={index}>
              <p>{text}</p>
            </SwiperSlide>
          ))}


          <div className={styles.nav}>
            <div>{currentIndex + 1}<span> / {totalSlides}</span></div>
            <div className={styles.buttons}>
              <button id='about-prev' className={styles.prev}>
                <ArrowLeft />
                <span>Previous</span>
              </button>
              <button id='about-next' className={styles.next}>
                <span>Next</span>
                <ArrowRight />
              </button>
            </div>
          </div>
        </Swiper>
      </div>

      <div className={styles.photoWrapper}>
        <Swiper
          onSwiper={(swiper) => (photoSwiper.current = swiper)}
          onSlideChange={() => bioSwiper.current.slideTo(photoSwiper.current.activeIndex)}
          className={styles.photoSwiper}
          grabCursor={true}
          slidesPerView={1}
          spaceBetween={32}
          modules={[Navigation]}
        >
          {photos.map((slide, index) => (
            <SwiperSlide key={index}>
              <figure className={styles.figure}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 600px) 100vw, 300px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <figcaption>{slide.caption}</figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}