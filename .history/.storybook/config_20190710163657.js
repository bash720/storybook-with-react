// import { configure } from '@storybook/react';

// // automatically import all files ending in *.stories.js
// const req = require.context('../stories', true, /\.stories\.js$/);
// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }

// configure(loadStories, module);


// */
import { configure } from '@storybook/react'
// tslint:disable-next-line:no-import-side-effect
import 'Styles/global-styles.jsx'

function requireAll (requireContext) {
  return requireContext.keys().map(requireContext)
}

function loadStories () {
  requireAll(require.context('./stories/', true, /.stories\.js?$/))
}

configure(loadStories, module)
