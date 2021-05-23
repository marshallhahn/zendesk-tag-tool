import { combineReducers } from 'redux';

import { queryReducer } from './queries/queryReducer';
import { fetchTagReducer } from './tags/fetchTagReducer';
import { zendeskTagReducer } from './tags/zendeskTagReducer';

const rootReducer = combineReducers({
  tags: fetchTagReducer,
  query: queryReducer,
  zendesk_tags: zendeskTagReducer,
});

export default rootReducer;
