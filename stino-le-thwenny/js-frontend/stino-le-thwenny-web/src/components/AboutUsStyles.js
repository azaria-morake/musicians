import styled, { css, keyframes } from 'styled-components';

export const AboutUsContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Helvetica';
  line-height: 1.6;
  color: rgb(216, 220, 224);
  position: relative;
  background: rgba(0, 0, 0, 0.8);
  background-image: url('/intricate-explorer-H0-3xfbU8wk-unsplash.jpg');
  background-size: cover; /* Ensure the background image covers the container */
  background-position: center; /* Center the background image */
  z-index: 1004;

  @media (max-width: 720px) {
    padding: 1rem; /* Reduce padding for smaller screens */
    background-size: 150%; /* Adjust background size for smaller screens */
  }
`;

export const WikipediaContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  border: 1px solid #a2a9b1;
  border-radius: 3px;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden; /* Ensure videos stay within the container */

  @media (max-width: 720px) {
    padding: 1rem; /* Reduce padding for smaller screens */
  }
`;

export const Header = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: white;
  border-bottom: 1px solid #a2a9b1;
  padding-bottom: 0.5rem;

  @media (max-width: 720px) {
    font-size: 1.5rem; /* Reduce font size for smaller screens */
  }
`;

export const WikiImage = styled.img`
  display: block; /* Ensure the image behaves as a block element */
  margin: 1rem auto; /* Center the image horizontally */
  border: 1px solid #a2a9b1;
  border-radius: 3px;
  max-width: 300px;
  height: auto;

  @media (max-width: 720px) {
    max-width: 200px; /* Reduce image size for smaller screens */
  }
`;

export const CenteredParagraph = styled.p`
  text-align: left;
  color: rgb(255, 255, 255);
  margin-bottom: 3rem;
  max-width: 100%; /* Ensure text covers the full width on smaller screens */

  @media (max-width: 720px) {
    margin-bottom: 1.5rem; /* Reduce margin for smaller screens */
  }
`;

export const SectionHeading = styled.h3`
  color: rgb(255, 255, 255);
  margin-bottom: 1.5rem;

  @media (max-width: 720px) {
    font-size: 1.2rem; /* Reduce font size for smaller screens */
  }
`;

export const UnstyledList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 1.5rem;
`;

export const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const StrongText = styled.strong`
  font-weight: bold;
`;

export const Paragraph = styled.p`
  margin-bottom: 1.5rem;

  @media (max-width: 720px) {
    margin-bottom: 1rem; /* Reduce margin for smaller screens */
  }
`;

export const VideoCarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 20px 0;
  height: 220px;

  @media (max-width: 720px) {
    height: 180px; /* Reduce height for smaller screens */
  }
`;

export const VideoCarouselWrapper = styled.div`
  display: flex;
  gap: 10px;
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

  @media (max-width: 720px) {
    width: 250px; /* Reduce card width for smaller screens */
    height: 150px; /* Reduce card height for smaller screens */
  }

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

  @media (max-width: 720px) {
    width: 40px; /* Reduce size for smaller screens */
    height: 40px;
    font-size: 18px;
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
    left: 10px;
  }

  &.next {
    right: 10px;
  }

  @media (max-width: 720px) {
    width: 50px; /* Reduce size for smaller screens */
    height: 50px;
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