/**
 ** Copyright (c) 2021, Marshall B. Hahn
 ** All rights reserved.
 **
 ** This source code is licensed under the BSD-style license found in the
 ** LICENSE file in the root directory of this source tree.
 **/

// Global Airtable API Client
import Airtable from 'airtable';
import { ZendeskAppSettings } from './ZAFClient';

export const AirtableClient = async () => {
  const settings = await ZendeskAppSettings().then((res) => {
    return {
      API_KEY: res.AIRTABLE_API_KEY,
      BASE_ID: res.AIRTABLE_BASE_ID,
      TABLE_ID: res.AIRTABLE_TABLE_ID,
    };
  });

  const base = new Airtable({ apiKey: settings.API_KEY }).base(
    settings.BASE_ID
  );

  const table = base(settings.TABLE_ID);

  return table;
};
