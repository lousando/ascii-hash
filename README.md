# ascii-hash

### Fast and naive non-cryptographic hash.

Calculates the sum of each character in a string using their
character (ASCII) codes. This makes it a computationally cheap
way to create relatively unique IDs. Use cases could include React `key`
generation or the creation of a few user IDs.

## Installation

```bash
npm i ascii-hash
# or
yarn add ascii-hash
```

## Usage

```js
const { asciiHash } = require("ascii-hash");

asciiHash("hello world!") // "1149"
```

For better performance with consecutive calls 
(such as in a React render method), consider using the 
memoized version which caches previous results in memory.

```js
const { asciiHashMem } = require("ascii-hash");

asciiHashMem("hello world!") // "1149"
```