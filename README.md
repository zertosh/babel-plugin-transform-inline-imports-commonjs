# babel-plugin-transform-inline-imports-commonjs

## Installation

```sh
$ npm install babel-plugin-transform-inline-imports-commonjs
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```js
// without options
{
  "plugins": ["transform-inline-imports-commonjs"]
}

// with options
{
  "plugins": [
    ["transform-inline-imports-commonjs", {
      "allowTopLevelThis": true
    }]
  ]
}
```

### Via CLI

```sh
$ babel --plugins transform-inline-imports-commonjs script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-inline-imports-commonjs"]
});
```
