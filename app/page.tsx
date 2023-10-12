'use client';

import styled from 'styled-components';
import Header from './components/Header';
import { cards } from './utils/cards';
import Card from './components/Card';
import FullPage from './components/FullPage';
import TextSection from './components/TextSection';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ZoomSection from './components/ZoomSection';
import Footer from './components/Footer';
import HorizontalWrapper from './components/HorizontalWrapper';

// поправить layout background
// полный ревью
// change full page name component
// заменить лого
// заменить картинки
// доработать кнопку
// faker

export default function Home() {
  const video = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: video,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8, 0.9],
    [1, 0.8, 0.8, 0]
  );

  return (
    <>
      <Header />
      <MainStyled>
        <section className="layout">
          <HorizontalWrapper height="40rem" direction={-1400}>
            <div className="cards">
              {cards.slice(0, 5).map((card, index) => {
                return (
                  <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
        </section>

        <section className="layout">
          <FullPage />
        </section>

        <section className="layout">
          <HorizontalWrapper height="40rem" direction={1400}>
            <div className="cards">
              {cards.slice(5).map((card, index) => {
                return (
                  <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
        </section>

        <section className="layout">
          <TextSection />
        </section>

        <section className="layout">
          <motion.div
            className="video"
            ref={video}
            style={{
              opacity,
              scale,
            }}>
            <iframe
              src="https://www.youtube.com/embed/CeNTyuuOc6o"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </motion.div>
        </section>

        <section className="layout">
          <ZoomSection />
        </section>

        <Footer />
      </MainStyled>
    </>
  );
}

const MainStyled = styled.main`
  min-height: 100vh;
  width: 100%;

  .layout {
    padding: 5rem 10rem;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(5, 30rem);
    gap: 4rem;
  }

  .video {
    padding: 2rem;
    background-color: #161616;
    border-radius: 1rem;
    iframe {
      border: none;
      width: 100%;
      height: 52rem;
    }
  }
`;
