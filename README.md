# i18n with ESM/CJS

checkout the example repository:

```
git clone https://github.com/mashpie/i18n-esm-cjs-example.git
```

install dependencies:

```
yarn install
```

run the examples:

```
node index.cjs
node index.mjs
```
Without specific `directory` option, the default directory is `./node_modules/i18n/locales`, which is not a good idea for deployments.

By uncommenting the `directory` option, the example will work as expected. And you should get the following output:

```
$ node index.cjs
"Hello from ./locales"

$ node index.mjs
"Hello from ./locales"
```
## esm

```js
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { I18n } from 'i18n';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const scope = {};

new I18n({
  locales: ['en'],
  register: scope,
  directory: path.join(__dirname, 'locales') 
});
```

## cjs

```js
const path = require('path');
const { I18n } = require('i18n');
const scope = {}

new I18n({
  locales: ['en'],
  register: scope,
  directory: path.join(__dirname, 'locales') 
});
```