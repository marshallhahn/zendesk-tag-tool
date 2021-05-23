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
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Skeleton } from '@zendeskgarden/react-loaders';

export const SkeletonLoader = () => (
  <Grid>
    <Row justifyContent="center">
      <Col>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Col>
    </Row>
    <Row justifyContent="center">
      <Col>
        <Skeleton height="30px" />
      </Col>
      <Col>
        <Skeleton height="30px" />
      </Col>
    </Row>
  </Grid>
);
