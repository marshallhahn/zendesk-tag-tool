/**
 ** Copyright (c) 2021, Marshall B. Hahn
 ** All rights reserved.
 **
 ** This source code is licensed under the BSD-style license found in the
 ** LICENSE file in the root directory of this source tree.
 **/

import React from 'react';
import { connect } from 'react-redux';
import { Button, Item, SkeletonLoader } from './index';
import styled from 'styled-components';
import { zendeskAddTag, zendeskRemoveTag } from '../actions';

const CardContainer = styled.div`
  margin-top: 1em;
  padding: 1em;
  box-shadow: 0px 0px 10px ${(props) => props.theme.palette.grey[200]};
  border: 1px solid ${(props) => props.theme.palette.grey[300]};
  border-radius: ${(props) => props.theme.borderRadii.md};
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 1em;
`;

const Card = (props) => {
  return (
    <>
      {props.loading === true ? (
        <CardContainer>
          <SkeletonLoader />
        </CardContainer>
      ) : (
        <CardContainer>
          <Item
            icon="tag"
            text={props.tagValue}
            clickable={true}
            onclick={() => props.zendeskAddTag(props.tagValue)}
          />
          <Item icon="info-circle" text={props.tagDefinition} />
          <Item icon="comment-alt" text={props.tagTopic} />
          <ButtonContainer>
            <Button
              type="add"
              icon="plus"
              text="Add Tag"
              onclick={() => props.zendeskAddTag(props.tagValue)}
            />
            <Button
              type="remove"
              icon="minus"
              text="Remove Tag"
              onclick={() => props.zendeskRemoveTag(props.tagValue)}
            />
          </ButtonContainer>
        </CardContainer>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    zendeskAddTag: (tagValue) => dispatch(zendeskAddTag(tagValue)),
    zendeskRemoveTag: (tagValue) => dispatch(zendeskRemoveTag(tagValue)),
  };
};

export default connect(null, mapDispatchToProps)(Card);
