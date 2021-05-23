/**
 ** Copyright (c) 2021, Marshall B. Hahn
 ** All rights reserved.
 **
 ** This source code is licensed under the BSD-style license found in the
 ** LICENSE file in the root directory of this source tree.
 **/

import * as actions from '../../actions/types';

export const zendeskTagReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ZENDESK_ACTIVE_TAGS:
      return action.data;
    default:
      return state;
  }
};
