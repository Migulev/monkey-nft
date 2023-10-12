'use client';

import React, { useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import useHover3d from '../hooks/useHover3d';

import image1 from '/public/monkey-spiral-1.png';
import image2 from '/public/monkey-spiral-2.png';
import spiral from '/public/spiral.svg';

function ZoomSection() {
  const hero = useRef<HTMLDivElement>(null);

  const hover = useHover3d(hero, {
    rotationFactorX: -5,
    rotationFactorY: 10,
    translateZ: 4,
  });

  const hover2 = useHover3d(hero, {
    rotationFactorX: 40,
    rotationFactorY: 20,
    translateZ: 7,
  });

  const hover3 = useHover3d(hero, {
    rotationFactorX: -40,
    rotationFactorY: -20,
    translateZ: -7,
  });

  return (
    <ZoomStyled ref={hero}>
      <div
        className="image"
        style={{
          height: '50rem',
          width: '100%',
        }}>
        <Image
          src={spiral}
          alt="bulb tree"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            transform: hover.transform,
            scale: 1.2,
            background: 'var(--color-bg)',
          }}
        />

        <Image
          src={image1}
          alt="bulb tree"
          className="monkey"
          width={500}
          height={500}
          style={{
            objectFit: 'cover',
            objectPosition: '50% 0%',
            transform: hover2.transform,
            // transition: hover2.transition,
          }}
        />

        <Image
          src={image2}
          alt="bulb tree"
          className="smoke"
          width={500}
          height={500}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            transform: hover3.transform,
            // transition: hover3.transition,
          }}
        />
      </div>
    </ZoomStyled>
  );
}

const ZoomStyled = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid var(--color-border);

  .image {
    border-radius: 8px;
    img {
      border-radius: 8px;
    }
  }

  .monkey {
    position: absolute;
    top: 10%;
    right: 3rem;
  }

  .smoke {
    position: absolute;
    top: 10%;
    left: 3rem;
  }
`;
export default ZoomSection;
