# Football data

This repository assembles footbal data as JSON files suitable for use within JavaScript projects (though as it is JSON, the data is generally usable with any programming language offering JSON support, e.g. PHP).

The data is grouped into topics and contains the data in different languages.


## Data sets

The following data sets are currently available:

- [List of finals in European cups](src/europeanCupFinals)


## Installation

`npm install @retiolum/football-data`


## Usage


### Node

```javascript
const footballData = require('@retiolum/football-data');

console.log(data.europeanCupFinals);
```


### Web/ES6

Import everything:

```javascript
import * as footballData from '@retiolum/football-data';

console.log(footballData.europeanCupFinals);
```

Or import only the things you need:

```javascript
import { europeanCupFinals } from '@retiolum/football-data';

console.log(europeanCupFinals);
```


## Raw data

The repository also contains the raw data used to create the JSON data; each raw data set includes a description where the data is from and how the conversion to JSON was done.
