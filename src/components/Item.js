/**
 ** Copyright (c) 2021, Marshall B. Hahn
 ** All rights reserved.
 **
 ** This source code is licensed under the BSD-style license found in the
 ** LICENSE file in the root directory of this source tree.
 **/

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0.5em 0em;
`;

const ItemIcon = styled(FontAwesomeIcon)`
  font-size: 1em;
  margin-top: 0.25em;
`;

const ItemText = styled.p`
  font-size: 1em;
  margin-left: 0.75em;
  margin-bottom: 0em;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  max-width: 90%;
`;

const ItemTextClickable = styled(ItemText)`
  cursor: pointer;
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const Item = (props) => {
  return (
    <ItemContainer>
      <ItemIcon icon={props.icon} />
      {props.clickable ? (
        <ItemTextClickable onClick={props.onclick}>
          {props.text}
        </ItemTextClickable>
      ) : (
        <ItemText>{props.text}</ItemText>
      )}
    </ItemContainer>
  );
};

Item.defaultProps = {
  icon: '',
  text: 'Tag Item',
};

Item.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
