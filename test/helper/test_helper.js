/**
 * Created by ray.xie on 9/12/2016.
 */

import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import jsdom from 'jsdom';

chai.use(chaiImmutable);

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

// We also need a bit of setup code for jsdom before it's ready for React to use.
// We essentially need to create jsdom versions of the document and window objects
// that would normally be provided by the web browser.
// Then we need to put them on the global object,
// so that they will be discovered by React when it accesses document or window.
// We can set up a test helper file for this kind of setup code:
global.document = doc;
global.window = win;

// Additionally, we need to take all the properties that the jsdom window object contains,
// such as navigator, and hoist them on to the Node.js global object.
// This is done so that properties provided by window can be used without the window. prefix,
// which is what would happen in a browser environment.
// Some of the code inside React relies on this:
Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});
