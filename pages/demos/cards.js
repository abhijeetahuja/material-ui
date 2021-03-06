import 'docs/src/modules/components/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';

const req = require.context('markdown', true, /.md$/);

function Page(props) {
  return (
    <MarkdownDocs
      markdown={req(`./cards${props.lang}.md`)}
      demos={{
        'pages/demos/cards/SimpleCard.js': {
          js: require('docs/src/pages/demos/cards/SimpleCard').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/cards/SimpleCard'), 'utf8')
`,
        },
        'pages/demos/cards/MediaCard.js': {
          js: require('docs/src/pages/demos/cards/MediaCard').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/cards/MediaCard'), 'utf8')
`,
        },
        'pages/demos/cards/ImgMediaCard.js': {
          js: require('docs/src/pages/demos/cards/ImgMediaCard').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/cards/ImgMediaCard'), 'utf8')
`,
        },
        'pages/demos/cards/MediaControlCard.js': {
          js: require('docs/src/pages/demos/cards/MediaControlCard').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/cards/MediaControlCard'), 'utf8')
`,
        },
        'pages/demos/cards/RecipeReviewCard.js': {
          js: require('docs/src/pages/demos/cards/RecipeReviewCard').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/cards/RecipeReviewCard'), 'utf8')
`,
        },
      }}
    />
  );
}

export default Page;
