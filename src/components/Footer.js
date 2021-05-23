/**
 ** Copyright (c) 2021, Marshall B. Hahn
 ** All rights reserved.
 **
 ** This source code is licensed under the BSD-style license found in the
 ** LICENSE file in the root directory of this source tree.
 **/

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding-top: 0.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${(props) => props.theme.palette.grey[300]};
`;

const Link = styled.a`
  color: ${(props) => props.theme.palette.grey[400]};
  text-decoration: none;

  :hover {
    color: ${(props) => props.theme.palette.grey[600]};
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <Link
        href="https://github.com/marshallhahn/zendesk-tag-tool/issues/new"
        target="_blank"
      >
        Report a bug
      </Link>
    </FooterContainer>
  );
};
