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
  const photos = [
    { src: "/images/mugen.jpg", alt: "Picture of Ace", caption: "Lorem Ipsum Dolor" },
    { src: "/images/mugen.jpg", alt: "Picture of Ace", caption: "Mugen" },
    { src: "/images/person-placeholder.jpg", alt: "Picture of Ace", caption: "Lorem Ipsum Dolor" },
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
          <SwiperSlide className={styles.slide}>
            <p>
              My journey began in 2014 as a freelance developer building websites for local startups. Since then, I&apos;ve had the privledge of
              building software for a{" "}
              <a href="https://oaksterdamuniversity.com">university </a>and a{" "}
              <a href="https://plpcsanjose.com">cannabis dispensary</a>.
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <p>
              When I&apos;m not at the computer, I usually spend my time playing guitar, painting, hiking, cooking, reading, and hanging out with my girlfriend, our dog, and 3 cats.
            </p>

          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <p>
              I love sci-fi, fantasy, and horror books, movies, and games. I&apos;ve left a few easter eggs of some of my favorite throughout this site.
            </p>
          </SwiperSlide>

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
              <figure>
                <Image
                  src={slide.src}
                  width={300}
                  height={300}
                  alt={slide.alt}
                />
                <figcaption>{slide.caption}</figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>




    </section>
  );
}