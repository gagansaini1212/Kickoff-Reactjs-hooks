/* eslint jsx-a11y/no-redundant-roles: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import config from '../utils/config';

const LinkStyled = styled(Link)`
  color: ${props => props.theme.primary};
`;

export default () => (
  <nav
    className="navbar is-transparent"
    role="navigation"
    aria-label="dropdown navigation">
    <LinkStyled className="navbar-item" to="/">
      {config.siteName}
    </LinkStyled>
  </nav>
);
