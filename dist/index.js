"use strict";
function add(a, b) {
    return a + b;
}
function AddHandler(a, b, cb) {
    const result = add(a, b);
    cb(result);
}
AddHandler(12, 13, (result) => {
    console.log(result);
});
//# sourceMappingURL=index.js.map