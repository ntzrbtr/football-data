# Football data

This repository assembles footbal data as JSON files suitable for use within JavaScript projects (though as it is JSON, the data is generally usable with any programming language offering JSON support, e.g. PHP).

The data is grouped into topics and contains the data in different languages (currently only German is available).


## Data sets

The following data sets are currently available:

- List of finals in European cups


## Installation

`npm install @ntzrbtr/football-data`


## Usage


### Node

```javascript
const footballData = require('@ntzrbtr/football-data');

console.log(footballData.uefaCup);
```


### Web/ES6

Import everything:

```javascript
import * as footballData from '@ntzrbtr/football-data';

console.log(footballData.uefaCup);
```

Or import only the things you need:

```javascript
import { uefaCup } from '@ntzrbtr/football-data';

console.log(uefaCup);
```


## Raw data

The repository also contains the raw data used to create the JSON data; each raw data set includes a description where the data is from and how the conversion to JSON was done.
