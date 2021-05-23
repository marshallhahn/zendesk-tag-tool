/**
 ** Copyright (c) 2021, Marshall B. Hahn
 ** All rights reserved.
 **
 ** This source code is licensed under the BSD-style license found in the
 ** LICENSE file in the root directory of this source tree.
 **/

import * as actions from '../../actions/types';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

export const fetchTagReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_TAGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_TAGS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case actions.FETCH_TAGS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
