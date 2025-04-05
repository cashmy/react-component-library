import { jsxs, Fragment, jsx } from 'react/jsx-runtime';

var Page = function (_a) {
    var title = _a.title, children = _a.children;
    return (jsxs(Fragment, { children: [jsx("h1", { children: title }), children] }));
};

export { Page };
//# sourceMappingURL=index.js.map
