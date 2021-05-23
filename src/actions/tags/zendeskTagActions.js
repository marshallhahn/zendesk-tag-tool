/**
 ** Copyright (c) 2021, Marshall B. Hahn
 ** All rights reserved.
 **
 ** This source code is licensed under the BSD-style license found in the
 ** LICENSE file in the root directory of this source tree.
 **/

import * as actions from '../types';
import { client } from '../../api/ZAFClient';

// ACTIONS
export const getActiveTags = (data) => ({
  type: actions.ZENDESK_ACTIVE_TAGS,
  data,
});

// ACTION CREATORS
export const zendeskGetTags = () => {
  return (dispatch) => {
    client.get('ticket.tags').then((data) => {
      const tags = data['ticket.tags'];
      dispatch(getActiveTags(tags));
    });
  };
};

export const zendeskAddTag = (tag) => {
  return (dispatch) => {
    client.invoke('ticket.tags.add', tag).then((data) => {
      const tags = data['ticket.tags.add'];
      dispatch(getActiveTags(tags));
    });
  };
};

export const zendeskRemoveTag = (tag) => {
  return (dispatch) => {
    client.invoke('ticket.tags.remove', tag).then((data) => {
      const tags = data['ticket.tags.remove'];
      dispatch(getActiveTags(tags));
    });
  };
};
