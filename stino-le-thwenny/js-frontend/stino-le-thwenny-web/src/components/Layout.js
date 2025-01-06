// Layout.js
import React from 'react';
import { Link } from 'react-router-dom';

import {
  Wrapper,
  BackgroundGradient,
  NavItemsContainer,
  Header,
  NavItem,
  Bg,
} from './HomepageStyles';

const Layout = ({ children }) => {
  return (
    <Bg>
      <BackgroundGradient>
        <Wrapper>
          <NavItemsContainer>
            <Header> | </Header>
            <img src="/img-13.jpeg" alt="bar" />
            <NavItem as={Link} to="/">Home</NavItem>
            <NavItem as={Link} to ="/about">About Us</NavItem>
            <NavItem as={Link} to="/upcoming-gigs">Upcoming Gigs</NavItem>
          </NavItemsContainer>
        </Wrapper>
        {children} {/* This will render the content of the page */}
      </BackgroundGradient>
    </Bg>
  );
};

export default Layout;