/**
 ** Copyright (c) 2021, Marshall B. Hahn
 ** All rights reserved.
 **
 ** This source code is licensed under the BSD-style license found in the
 ** LICENSE file in the root directory of this source tree.
 **/

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Fuse from 'fuse.js';

import { fetchTags } from '../actions';
import { Card } from './index';

function CardContainer({ query, tags, fetchTags }) {
  useEffect(() => {
    fetchTags();
  }, []);

  // Fuse Options
  const options = {
    keys: [
      { name: 'fields.tag_value', weight: 1 },
      { name: 'fields.tag_name', weight: 2 },
      { name: 'fields.definition', weight: 3 },
    ],
    includeScore: true,
    shouldSort: true,
    includeMatches: true,
    findAllMatches: true,
    threshold: 0.1,
  };
  const myIndex = Fuse.createIndex(options.keys, tags.data);
  const fuse = new Fuse(tags.data, options, myIndex);
  const results = fuse.search(query, { limit: 5 });
  const searchResults = query
    ? results.map((result) => result.item)
    : tags.data.slice(0, 5).map((result) => result);

  return (
    <>
      {tags.loading ? (
        <Card loading={true} />
      ) : tags.error ? (
        <p>{tags.error}</p>
      ) : (
        searchResults.map((tag) => {
          return (
            <Card
              key={tag.id}
              tagValue={tag.fields.tag_value}
              tagDefinition={tag.fields.tag_definition}
              tagTopic={tag.fields.tag_topic}
            />
          );
        })
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    tags: state.tags,
    query: state.query,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTags: () => dispatch(fetchTags()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
