// Layout.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import {
  Wrapper,
  BackgroundGradient,
  NavItemsContainer,
  Header,
  NavItem,
  Bg,
  BurgerButton,
  MobileMenu,
  NavLogo,
  MobileNavItem,
  NavImage,
} from './HomepageStyles';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Bg>
      <BackgroundGradient>
        <Wrapper>
        <BurgerButton onClick={toggleMenu}>
       {isMenuOpen ? (
        <X size={window.innerWidth <= 720 ? 30 : 30} /> // 80px on small screens, 40px on larger screens
        ) : (
         <Menu size={window.innerWidth <= 720 ? 40 : 40} /> // 80px on small screens, 40px on larger screens
          )}
          </BurgerButton>
          
          { /* <NavLogo src="/img-13.jpeg" alt="bar" /> */ }
          
          {/* Desktop Navigation */}
          <NavItemsContainer className="desktop-nav">
            <NavImage />
            <Header> | </Header>
            <NavItem as={Link} to="/">Home</NavItem>
            <NavItem as={Link} to="/about">About Us</NavItem>
            <NavItem as={Link} to="/upcoming-gigs">Upcoming Gigs</NavItem>
          </NavItemsContainer>

          {/* Mobile Navigation */}
          <MobileMenu $isOpen={isMenuOpen}>
            <MobileNavItem as={Link} to="/" onClick={toggleMenu}>Home</MobileNavItem>
            <MobileNavItem as={Link} to="/about" onClick={toggleMenu}>About Us</MobileNavItem>
            <MobileNavItem as={Link} to="/upcoming-gigs" onClick={toggleMenu}>Upcoming Gigs</MobileNavItem>
          </MobileMenu>
        </Wrapper>
        {children}
      </BackgroundGradient>
    </Bg>
  );
};

export default Layout;
