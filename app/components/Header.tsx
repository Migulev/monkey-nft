'use client';

import Image from 'next/image';
import styled from 'styled-components';
import { FaRocket, FaWallet } from 'react-icons/fa';
import { Abril_Fatface } from 'next/font/google';
import { useRef } from 'react';

import logo from '@/public/monkey_logo.png';
import mainImage from '@/public/monkey-main.png';
import useHover3d from '@/app/hooks/useHover3d';
import Button from './ui/Button';

const abril = Abril_Fatface({
  subsets: ['latin'],
  weight: '400',
});

const Header = () => {
  const heroSection = useRef<HTMLDivElement>(null);

  const frameHover = useHover3d(heroSection, {
    rotationFactorX: -25,
    rotationFactorY: 25,
  });

  const imageHover = useHover3d(heroSection, {
    rotationFactorX: -15,
    rotationFactorY: 5,
  });

  return (
    <HeaderStyled ref={heroSection}>
      <nav>
        <div className="logo">
          <Image src={logo} alt="logo" width={120} />
          <div className="flex-col">
            <p>Monkey</p>
            <p>Business</p>
          </div>
        </div>
        <div className="input">
          <input type="text" placeholder="Search" />
        </div>
        <ul className="nav-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Auctions</a>
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <Button name="Connect Wallet" icon={<FaWallet />} />
        </ul>
      </nav>
      <div className="header-content">
        <div className="text-content">
          <h1 className={abril.className}>
            Buy, collect, and sell extraordinary NFTs
          </h1>
          <p>
            Acquire expertise in navigating the rapidly evolving and
            exhilarating NFT landscape, unveil the highly sought-after NFTs, and
            comprehend the possible advantages and disadvantages of acquiring,
            amassing, and vending these exceptional digital assets.
          </p>
          <div className="buttons">
            <Button
              name="Get Started"
              background="#f2ac4a"
              color="#fff"
              border="1px solid #f2ac4a"
              icon={<FaRocket />}
            />
            <Button name="Learn More" />
          </div>
        </div>
        <div className="image-content">
          <div
            className="image"
            style={{
              transform: frameHover.transform,
            }}>
            <Image
              src={mainImage}
              width={600}
              height={600}
              alt="hero image"
              style={{
                objectFit: 'cover',
                transform: imageHover.transform,
              }}
            />
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  nav {
    padding: 0 10rem;
    min-height: 10vh;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    .flex-col {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .input {
      flex: 2;
      display: flex;
      justify-content: center;
      input {
        width: 55%;
        padding: 0.6rem 0.8rem;
        border-radius: 8px;
        background-color: #161616;
        border: 1px solid var(--color-border);
        &::placeholder {
          color: var(--color-border);
          font-weight: 500;
        }
      }
    }

    .nav-items {
      display: flex;
      align-items: center;
      gap: 2rem;
      li {
        transition: all 0.2s ease-in-out;

        &:hover {
          color: white;
          transform: scale(1.1);
        }
      }
    }
  }

  .header-content {
    padding: 0 10rem 5rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    min-height: calc(100vh - 10vh);

    .text-content {
      h1 {
        font-size: clamp(2rem, 5vw, 5rem);
        color: #f2994a;
        transition: all 0.01s linear;
        padding-bottom: 1.5rem;
      }

      .buttons {
        display: flex;
        gap: 1rem;
        margin-top: 2.5rem;
      }
    }

    .image-content .image {
      padding: 1rem;
      border-radius: 8px;
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);
      transition: transform 0.3s ease-out;

      img {
        border-radius: 8px;
        transition: transform 0.3s ease-out;
      }
    }
  }
`;

export default Header;
