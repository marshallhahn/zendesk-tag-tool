/**
 ** Copyright (c) 2021, Marshall B. Hahn
 ** All rights reserved.
 **
 ** This source code is licensed under the BSD-style license found in the
 ** LICENSE file in the root directory of this source tree.
 **/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PrimaryButton = styled.button`
  background-color: ${(props) => props.theme.palette.grey[500]};
  color: white;
  width: 100%;
  height: 2em;
  outline: none;
  border: none;
  border-radius: ${(props) => props.theme.borderRadii.md};
  display: flex;
  align-items: center;
  justify-content: center;

  :first-child {
    margin-left: 0em;
    margin-right: 0.25em;
  }

  :last-child {
    margin-right: 0em;
    margin-left: 0.25em;
  }
`;

const AddButton = styled(PrimaryButton)`
  background-color: ${(props) => props.theme.palette.mint[400]};

  :hover {
    background-color: ${(props) => props.theme.palette.mint[600]};
  }
`;

const RemoveButton = styled(PrimaryButton)`
  background-color: ${(props) => props.theme.palette.red[400]};

  :hover {
    background-color: ${(props) => props.theme.palette.red[600]};
  }
`;

const PrimaryButtonText = styled.span`
  font-size: 1em;
  margin-left: 0.5em;
`;

export const Button = (props) => {
  return (
    <>
      {props.type === 'add' ? (
        <AddButton onClick={props.onclick}>
          <FontAwesomeIcon icon={props.icon} />
          <PrimaryButtonText>{props.text}</PrimaryButtonText>
        </AddButton>
      ) : props.type === 'remove' ? (
        <RemoveButton onClick={props.onclick}>
          <FontAwesomeIcon icon={props.icon} />
          <PrimaryButtonText>{props.text}</PrimaryButtonText>
        </RemoveButton>
      ) : (
        <PrimaryButton>
          <PrimaryButtonText>{props.text}</PrimaryButtonText>
        </PrimaryButton>
      )}
    </>
  );
};

Button.defaultProps = {
  text: 'Button',
  type: '',
  icon: '',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  type: PropTypes.string,
};
