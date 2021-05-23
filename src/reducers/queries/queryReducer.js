/**
 ** Copyright (c) 2021, Marshall B. Hahn
 ** All rights reserved.
 **
 ** This source code is licensed under the BSD-style license found in the
 ** LICENSE file in the root directory of this source tree.
 **/

import * as actions from '../../actions/types';

export const queryReducer = (state = '', action) => {
  switch (action.type) {
    case actions.UPDATE_QUERY:
      return action.query;
    default:
      return state;
  }
};
