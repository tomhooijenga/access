import proxy from './object';
import access from '../access';

/* eslint-disable no-undef */
if (typeof window !== 'undefined' && typeof window.DOMStringMap !== 'undefined') {
  access.register(window.DOMStringMap, proxy);
}
/* eslint-enable no-undef */
