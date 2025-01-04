import styled, { css, keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const BackgroundGradient = styled.div`
  background: rgb(5, 5, 5);
  min-height: 100vh;
  padding: 20px;
  position: relative;
  overflow: hidden;


  }
`;

/* export const BackgroundGradient = styled.div`
  background: linear-gradient(90deg, #d7a7ff, #a389d4);
  min-height: 100vh;
  padding: 20px;
`; */
export const PageWrapper = styled.div`
  text-align: center;
  font-family: 'Arial', sans-serif;
    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    pointer-events: none; /* Ensures the noise layer doesn't interfere with interactions */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    opacity: 0.2; /* Adjust opacity for subtlety */
    z-index: 0;
`;

export const Wrapper = styled.div`
background-color:rgb(58, 46, 42);
  background-image: url('/fredy-martinez-ou3fG2zWbcs-unsplash.jpg');
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
padding: 0px;
border-radius: 10px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-left: 0px;
margin-right: 0px;
margin-top: 0px;
position: sticky;
width: 100%;
z-index: 1;

`;

export const Header = styled.h1`
  font-size: 50px;
  color: white;
  animation: ${slideIn} 1s ease-out;
  margin-left: -59px;
`;

export const Navbar = styled.nav`
  display: flex; // uses a flexbox layout
  justify-content: flex-end; // Move items to the rightmost
  align-items: center; // Center items vertically
  width: 100%; // Full width
  margin: 0px 0; // Top and bottom margin
  gap: 20px; // gap between items
`;

export const NavItemsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 0.3s ease;
  margin-left: 60px;
  display: flex;
  align-items: center;
  justify-content: center;


  &:hover {
    background-color: white;
    color: black;
    height: 30px;
    align-items: center;
  }
`;
export const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 80%;
  margin: 20px auto;
  padding: 20px 0;
  gap: 5 px;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  gap: 0px;
  transform: translateX(${(props) => props.translateX}px);
  transition: transform 0.5s ease;
  margin: 0 50px;
  justify-content: center;
`;

export const CarouselImageContainer = styled.div`
  width: 300px;
  height: 300px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  transform-origin: center;

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

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease; 
`;

export const NavbarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;
export const CarouselButton = styled.button`
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
`;

export const GroupName = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin: 20px 0;
  animation: ${slideIn} 1s ease-out;
`;

export const Description = styled.p`
  color: white;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 30px;
  line-height: 1.6;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  z-index: 1;

  button {
    background-color: black;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
     z-index: 1;

    &:hover {
      background-color: white;
      color: black;
      transform: translateY(-2px);
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s ease;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  gap: 20px;
  animation: ${slideIn} 0.3s ease;
`;

export const Icon = styled.a`
  font-size: 1.2rem;
  color: black;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: gray;
    transform: translateY(-2px);
  }
`;