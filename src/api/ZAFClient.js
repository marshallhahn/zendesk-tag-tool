/**
 ** Copyright (c) 2021, Marshall B. Hahn
 ** All rights reserved.
 **
 ** This source code is licensed under the BSD-style license found in the
 ** LICENSE file in the root directory of this source tree.
 **/

// Global Constant for the Zendesk Client
export const client = ZAFClient.init();

export const ZendeskAppSettings = async () => {
  return await client.metadata().then((metadata) => {
    return {
      AIRTABLE_API_KEY: metadata.settings.AIRTABLE_API_KEY,
      AIRTABLE_BASE_ID: metadata.settings.AIRTABLE_BASE_ID,
      AIRTABLE_TABLE_ID: metadata.settings.AIRTABLE_TABLE_ID,
    };
  });
};
