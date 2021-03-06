require('babel-register')();

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = new JSDOM('').window.document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
  platform: 'mac',
  appName: 'Google Chrome'
};

documentRef = document;