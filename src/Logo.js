import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
  color: tomato;
  font-size: ${props => (props.small ? '24px' : '36px')};
  font-weight: bold;
  margin-left: ${props => (props.inNavBar ? '60px' : '0')};

  @media (min-width: ${props => props.theme.tabletMin}) {
    margin-left: 0;
  }
`;

export default props => <StyledLogo {...props}>AWSMWP</StyledLogo>;
