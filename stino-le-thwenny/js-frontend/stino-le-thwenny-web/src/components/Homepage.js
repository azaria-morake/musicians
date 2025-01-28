import React, { useState, useEffect, useRef } from 'react';
import Layout from './Layout';
import {
  PageWrapper,
  CarouselContainer,
  CarouselWrapper,
  CarouselImageContainer,
  CarouselImage,
  CarouselButton,
  GroupName,
  Description,
  ButtonWrapper,
  Modal,
  ModalContent,
  Icon,
  CloseButton,
  FullSizeImage,
  CarouselModal,
  CarouselModalContent,
} from './HomepageStyles';
import Descriptions from './Description';

const Homepage = () => {
  const [isStreamModalOpen, setStreamModalOpen] = useState(false);
  const [isFollowModalOpen, setFollowModalOpen] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // State for full-size image
  const carouselRef = useRef(null);

  const isMobile = window.innerWidth <= 768;
  const imageWidth = isMobile ? window.innerWidth - 80 : 310; // Adjust width for mobile

  useEffect(() => {
    const handleResize = () => {
      // Reset position when switching between mobile and desktop
      setTranslateX(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    '/img-0.jpeg',
    '/img-1.jpeg',
    '/img-2.jpeg',
    '/img-3.jpeg',
    '/img-4.jpeg',
    '/img-5.jpeg',
    '/img-6.jpeg',
    '/img-7.jpeg',
    '/img-8.jpeg',
    '/img-9.jpeg',
    '/bannerpic.jpg',
  ];

  const visibleImages = Math.floor((carouselRef.current?.offsetWidth || 0) / imageWidth);
  const maxTranslateX = -(imageWidth * (images.length - visibleImages));

  useEffect(() => {
    let intervalId;
    if (autoScroll) {
      intervalId = setInterval(() => {
        setTranslateX((prev) => {
          const nextTranslate = prev - imageWidth;
          return nextTranslate <= maxTranslateX ? 0 : nextTranslate;
        });
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [autoScroll, maxTranslateX, imageWidth]);

  const handleNext = () => {
    setAutoScroll(false);
    setTranslateX((prev) => {
      const nextTranslate = prev - imageWidth;
      return nextTranslate <= maxTranslateX ? 0 : nextTranslate;
    });
  };

  const handlePrev = () => {
    setAutoScroll(false);
    setTranslateX((prev) => {
      const nextTranslate = prev + imageWidth;
      return nextTranslate >= 0 ? 0 : nextTranslate; // Reset to 0 if at the first image
    });
  };

  const handleMouseEnter = (index) => {
    setAutoScroll(false);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setAutoScroll(true);
    setHoveredIndex(null);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image); // Open modal with the selected image
  };

  const handleCloseModal = () => {
    setSelectedImage(null); // Close modal
  };

  return (
    <Layout>
      <PageWrapper>
        <CarouselContainer ref={carouselRef}>
          <CarouselButton className="prev" onClick={handlePrev}>
            &#8249;
          </CarouselButton>
          <CarouselWrapper translateX={translateX}>
            {images.map((image, index) => (
              <CarouselImageContainer
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                $isHovered={hoveredIndex === index}
                $isAdjacent={hoveredIndex !== null && Math.abs(hoveredIndex - index) === 1}
                onClick={() => handleImageClick(image)} // Add click handler
              >
                <CarouselImage src={image} alt={`Carousel ${index + 1}`} />
              </CarouselImageContainer>
            ))}
          </CarouselWrapper>
          <CarouselButton className="next" onClick={handleNext}>
            &#8250;
          </CarouselButton>
        </CarouselContainer>

        <GroupName>Stino Le Thwenny</GroupName>
        <Description> <Descriptions /> </Description>

        <ButtonWrapper>
          <button onClick={() => setStreamModalOpen(true)}>Stream</button>
          <button onClick={() => setFollowModalOpen(true)}>Follow Us</button>
        </ButtonWrapper>

        {isStreamModalOpen && (
          <Modal onClick={() => setStreamModalOpen(false)}>
            <ModalContent>
              <Icon href="https://open.spotify.com/artist/5kicxKGLnJF6uG0pgb0F3m" target="_blank">
                Spotify
              </Icon>
              <Icon href="https://music.apple.com/us/artist/stino-le-thwenny/1444686993" target="_blank">
                Apple Music
              </Icon>
            </ModalContent>
          </Modal>
        )}

        {isFollowModalOpen && (
          <Modal onClick={() => setFollowModalOpen(false)}>
            <ModalContent>
              <Icon href="https://web.facebook.com/p/Stino-Le-Thwenny-100057116782979/?_rdc=1&_rdr" target="_blank">
                Facebook
              </Icon>
              <Icon href="https://www.instagram.com/stino_le_thwenny/" target="_blank">
                Instagram
              </Icon>
            </ModalContent>
          </Modal>
        )}

        {selectedImage && ( // Full-size image modal
  <CarouselModal onClick={handleCloseModal}>
    <CarouselModalContent onClick={(e) => e.stopPropagation()}> {/* Prevent modal from closing when clicking inside */}
      <CloseButton onClick={handleCloseModal}>X</CloseButton>
      <FullSizeImage src={selectedImage} alt="Full Size" />
    </CarouselModalContent>
  </CarouselModal>
)}
      </PageWrapper>
    </Layout>
  );
};

export default Homepage;