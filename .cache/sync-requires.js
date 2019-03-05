const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jon/dev/projects/iler.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jon/dev/projects/iler.io/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/jon/dev/projects/iler.io/src/pages/blog.js"))),
  "component---src-pages-home-js": hot(preferDefault(require("/Users/jon/dev/projects/iler.io/src/pages/home.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jon/dev/projects/iler.io/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/jon/dev/projects/iler.io/src/pages/page-2.js"))),
  "component---src-pages-posts-js": hot(preferDefault(require("/Users/jon/dev/projects/iler.io/src/pages/posts.js")))
}

