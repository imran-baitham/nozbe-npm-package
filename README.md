# nozbe

> A lightweight utility for constructing className strings conditionally.

## Install

```
$ npm install --save nozbe
```

## Usage

```js
import nozbe from "nozbe";
// or
import { nozbe } from "nozbe";

// Strings (variadic)
nozbe("bg-red-400", true && "text-blue-400", "p-20");
//=> 'bg-red-400 text-blue-400 p-20'

// Objects
nozbe({ "bg-red-400": true, "text-blue-400": false, "p-20": isTrue() });
//=> 'bg-red-400 p-20'

// Arrays
nozbe(["bg-red-400", 0, false, "text-blue-400"]);
//=> 'bg-red-400 text-blue-400'

// Kitchen sink (with nesting)
nozbe(
  "bg-red-400",
  [
    true && "text-blue-400",
    { "p-20": false, "p-52": null },
    ["hello", ["there"]],
  ],
  "cya"
);
//=> 'bg-red-400 text-blue-400 hello there cya'
```

## API

### nozbe(...input)

Returns: `String`

#### input

Type: `Mixed`

Accepts any number of arguments, each being a String, Object, Array, Boolean.

1. String: Concatenates with a space delimiter.
2. Object: Applies classes based on truthy values.
3. Array: Conditionally includes classes based on truthiness of elements.

```js
nozbe(true, false, "", null, undefined, 0, NaN);
//=> ''
```

## Support

Works in all Node.js environments and modern browsers supporting Array.isArray.

MIT © [Imran Baitham](https://lukeed.com)
