import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: #333;

  @media (min-width: ${props => props.theme.tabletMin}) {
    position: static;
    bottom: auto;
    background: transparent;
    margin-left: auto;
  }

  &.hidden {
    display: none;

    @media (min-width: ${props => props.theme.tabletMin}) {
      display: block;
    }
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin: 80px 0 0;

    @media (min-width: ${props => props.theme.tabletMin}) {
      display: flex;
      margin: 0;
    }
  }

  a {
    display: block;
    padding: 12px 60px 12px 24px;
    font-size: 24px;
    color: #fff;
    text-decoration: none;
    font-weight: bold;

    @media (min-width: ${props => props.theme.tabletMin}) {
      color: tomato;
      padding: 12px 24px;
    }
  }
`;

export default ({ navHidden }) => (
  <Nav className={navHidden ? 'hidden' : ''}>
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </Nav>
);
