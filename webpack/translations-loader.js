/**
 ** Copyright (c) 2021, Marshall B. Hahn
 ** All rights reserved.
 **
 ** This source code is licensed under the BSD-style license found in the
 ** LICENSE file in the root directory of this source tree.
 **/

function translationFlatten(object, currentKeys = []) {
  const res = {};

  Object.keys(object).map((key) => {
    const value = object[key];

    if (typeof value === 'object') {
      if (value.title && value.value) {
        const flattenedKey = [...currentKeys, key].join('.');
        res[flattenedKey] = value.value;
      } else {
        Object.assign(res, translationFlatten(value, [...currentKeys, key]));
      }
    } else {
      const flattenedKey = [...currentKeys, key].join('.');
      res[flattenedKey] = value;
    }
  });

  return res;
}

function TranslationsLoader(content) {
  let translationsInput;
  try {
    translationsInput = JSON.parse(content);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  const compiledTranslations = translationFlatten(translationsInput);

  return `module.exports = ${JSON.stringify(compiledTranslations)}`;
}

module.exports = TranslationsLoader;
