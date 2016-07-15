import React from 'react';
import peg from 'pegjs';
import defaultParserInterface from '../utils/defaultParserInterface';
import SettingsRenderer from '../utils/SettingsRenderer';

const ID = 'llst-method';
const defaultOptions = {
  treeAdapter: 'default',
};

const parserSettingsConfiguration = {
  fields : [
  ],
};

export default {
  ...defaultParserInterface,

  id: ID,
  displayName: ID,
  locationProps: new Set(['location']),

  loadParser(callback) {
      require(['./method/llst-method.js'], (parser) => {
          callback(parser);
      })
  },

  parse(parser, code, options) {
    return parser.parse(code);
  },

  getNodeName(node) {
      return node.type;
  },

  nodeToRange(node) {
    if (node.location) {
      return [node.location.start.offset, node.location.end.offset];
    }
  },

  opensByDefault(node, key) {
    return key === 'body' || key === 'statements';
  },

  renderSettings(parserSettings, onChange) {
    return null;
  },

  _ignoredProperties: new Set([]),
};
