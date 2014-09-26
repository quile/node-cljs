try {
    require("source-map-support").install();
} catch(err) {
}
require("./js/goog/bootstrap/nodejs")
require("./node-cljs")
require("./js/node_cljs/core")
node_cljs.core._main();
