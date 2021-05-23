/**
 ** Copyright (c) 2021, Marshall B. Hahn
 ** All rights reserved.
 **
 ** This source code is licensed under the BSD-style license found in the
 ** LICENSE file in the root directory of this source tree.
 **/

/**
 * Zendesk's Garden UI:
 * https://garden.zendesk.com/components/skeleton
 **/

import React from 'react';
import { connect } from 'react-redux';
import { updateQuery } from '../actions';

import { Field, MediaInput } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';
import { ReactComponent as StartIcon } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';

const Searchbar = (props) => {
  return (
    <Row justifyContent="center">
      <Col>
        <Field>
          <MediaInput
            focusInset
            start={<StartIcon />}
            placeholder="Search for tags..."
            onChange={(e) => props.updateQuery(e.target.value)}
            value={props.query}
          />
        </Field>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    query: state.query,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateQuery: (query) => dispatch(updateQuery(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
