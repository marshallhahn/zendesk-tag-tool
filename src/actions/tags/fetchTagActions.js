/**
 ** Copyright (c) 2021, Marshall B. Hahn
 ** All rights reserved.
 **
 ** This source code is licensed under the BSD-style license found in the
 ** LICENSE file in the root directory of this source tree.
 **/

import { AirtableClient } from '../../api/Airtable';
import * as actions from '../types';

// ACTIONS
export const fetchTagsRequest = () => ({
  type: actions.FETCH_TAGS_REQUEST,
});

export const fetchTagsSuccess = (tags) => ({
  type: actions.FETCH_TAGS_SUCCESS,
  payload: tags,
});

export const fetchTagsFailure = (error) => ({
  type: actions.FETCH_TAGS_FAILURE,
  payload: error,
});

// ACTION CREATORS
export const fetchTags = () => {
  return (dispatch) => {
    dispatch(fetchTagsRequest());
    AirtableClient().then((table) => {
      table
        .select({
          view: 'Table',
          sort: [{ field: 'tag_value', direction: 'asc' }],
          filterByFormula: '{status} = "Active"',
        })
        .all()
        .then((records) => {
          dispatch(fetchTagsSuccess(records));
        })
        .catch((err) => {
          const error = err.message;
          dispatch(fetchTagsFailure(error));
          return;
        });
    });
  };
};
