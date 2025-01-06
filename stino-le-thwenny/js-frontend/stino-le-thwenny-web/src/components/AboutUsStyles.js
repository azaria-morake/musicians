// AboutUsStyles.js
import styled, { css, keyframes } from 'styled-components';

export const AboutUsContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Helvetica';
  line-height: 1.6;
  color:rgb(216, 220, 224);
  position: relative;
  background: rgb(0, 0, 0, 0.8) ;
  background-image: url('/intricate-explorer-H0-3xfbU8wk-unsplash.jpg');
  background-size: 150%; 
  z-index: 1004;
`;

export const WikipediaContainer = styled.div`
  background: rgb(0, 0, 0, 0.8);
  padding: 2rem;
  border: 1px solid #a2a9b1;
  border-radius: 3px;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden; /* Ensure videos stay within the container */
  background-image: url();
`;

export const Header = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #000;
  border-bottom: 1px solid #a2a9b1;
  padding-bottom: 0.5rem;
  color: white;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #202122;
`;

export const WikiImage = styled.img`
  float: right;
  margin: 0 0 1rem 1rem;
  border: 1px solid #a2a9b1;
  border-radius: 3px;
  max-width: 300px;
  height: auto;
`;

export const VideoCarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden; /* Hide overflow to keep videos within the Wikipedia container */
  margin: 20px 0;
  height: 220px; /* Adjust height to fit videos */
`;

export const VideoCarouselWrapper = styled.div`
  display: flex;
  gap: 10px; /* 10px gap between videos */
  transform: translateX(${(props) => props.translateX}px);
  transition: transform 0.5s ease;
`;

export const VideoCard = styled.div`
  flex: 0 0 auto;
  width: 300px;
  height: 200px;
  position: relative;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  border-radius: 10px;
  overflow: hidden;
  align-content: center;
  align-items: center;


  ${props =>
    props.$isHovered &&
    css`
      transform: scale(1.07);
      z-index: 2;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    `}
  
  ${props =>
    !props.$isHovered &&
    css`
      transform: scale(0.9);
      opacity: 100%;
    `}
`;

export const VideoThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  align-content: center;
  align-items: center; 
`;

export const PlayButtonOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

export const YTCarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 3;
  transition: all 0.3s ease;

  &:hover {
    background: black;
    transform: translateY(-50%) scale(1.1);
  }

  &.prev {
    left: 10px; /* Position outside the Wikipedia container */
  }

  &.next {
    right: 10px; /* Position outside the Wikipedia container */
  }
`;

export const YouTubeModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const YouTubeModalContent = styled.div`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  width: 90%;
  max-width: 800px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;