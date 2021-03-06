# GimmeJS

[![Build Status](https://travis-ci.org/dreamistlabs/gimmejs.svg?branch=master)](https://travis-ci.org/dreamistlabs/gimmejs)
[![Coverage Status](https://coveralls.io/repos/github/dreamistlabs/gimmejs/badge.svg?branch=master)](https://coveralls.io/github/dreamistlabs/gimmejs?branch=master)
[![node](https://img.shields.io/node/v/passport.svg?branch=master)](https://github.com/dreamistlabs/gimmejs)
[![npm version](https://badge.fury.io/js/gimmejs.svg?branch=master)](https://badge.fury.io/js/gimmejs)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/dreamist-labs/gimmejs)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/dreamistlabs/gimmejs?branch=master)

Sometimes, you want to skip the pleasantries and just say, "gimme!"

## Installation

Use npm.

```
npm install gimmejs --save
```

But yarn works too.

```
yarn add gimmejs
```

Or, if you so wish, include it in the browser.

```
/* @todo */
```

## Usage

```
const gimme = require('gimmejs');

gimme.number(); // 8
```

## API

### #credit( opts )

Coming soon...

### #currency( iso, digits, decimal )

Generate a random currency value.

| Parameters/Return     | Data Type | Default Value |
| --------------------- | --------- | ------------- |
| @param iso (required) | string    | undefined     |
| @param digits         | number    | 1 (max: 20)   |
| @param decimal        | boolean   | false         |

#### Examples

```
gimme.currency('USD');
'$5'

gimme.currency('SEK', 6)
'479,236kr'

gimme.currency('GBP', 4)
'£5,722'

gimme.currency('GBP', 4, true)
'£5,090.96'

gimme.currency();
// Error: The "iso" parameter is required.
```

### #name( type, gender, salutation )

Coming soon...

### #number( digits, formatted, decimal )

| Parameters/Return | Data Type | Default Value |
| ----------------- | --------- | ------------- |
| @param digits     | number    | 1 (max: 20)   |
| @param formatted  | boolean   | false         |
| @param decimal    | boolean   | false         |

**Note on @return value**
If no arguments or only the first argument is provided, then the return value will be a number.
If the 2nd or 3rd arguments are provided, then the return value will be a string.

#### Examples

```
gimme.number();
8

gimme.number(8);
48294519

gimme.number(7, true);
4,284,569

gimme.number(4, true, true);
9,143.94

gimme.number(6, false, true);
475027.74
```

[AVA](https://github.com/avajs/ava) - Testing can be a drag!
[Husky](https://github.com/typicode/husky) - Git hooks made easy!
