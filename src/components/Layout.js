/**
 ** Copyright (c) 2021, Marshall B. Hahn
 ** All rights reserved.
 **
 ** This source code is licensed under the BSD-style license found in the
 ** LICENSE file in the root directory of this source tree.
 **/

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { zendeskGetTags } from '../actions';

// Components
import { CardContainer, Footer, Searchbar } from './index';

// Theme
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Grid, Col, Row } from '@zendeskgarden/react-grid';
import { theme } from '../themes/default';

// Font Awesome Icons Library
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTag,
  faInfoCircle,
  faCommentAlt,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
library.add(faTag, faInfoCircle, faCommentAlt, faPlus, faMinus);

const Layout = (props) => {
  useEffect(() => {
    props.zendeskGetTags();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid>
        <Row>
          <Col>
            <Searchbar />
          </Col>
        </Row>
        <Row>
          <Col style={{ overflowY: 'auto', height: 'calc(100vh - 70px)' }}>
            <CardContainer />
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Grid>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    zendesk_tags: state.zendesk_tags,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    zendeskGetTags: () => dispatch(zendeskGetTags()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
