# import-sort-style-module

A style for [import-sort](https://github.com/renke/import-sort) that is focused
on path types.
Inspired from : https://github.com/renke/import-sort/tree/master/packages/import-sort-style-module

```js
// Modules from the Node.js "standard" library sorted by name then Third-party modules sorted by name
import { readFile, writeFile } from "fs";
import * as path from "path";
import aa from "aa";
import bb from "bb";
import cc from "cc";

// First-party modules (absolute path) sorted by name
import aaa from "$src/aaa";
import bbb from "$src/bbb";

// First-party modules sorted by "relative depth" and then by name
import aaa from "../../aaa";
import bbb from "../../bbb";
import aaaaa from "./aaaaa";
import bbbbb from "./bbbbb";
```
