# European cup finals

This data set contains data about the finals in all European cups from the beginning until now.

For each final, the following information is available:

- Season
- Stadium
- City
- Teams (including country)
- Winner / runner-up
- Result (seen from the winner's perspective)

For two-legged finals, the information about stadium, city and result is available as a combination of both legs as well as separate information.


## Raw data

The raw data was copied from tables in various Wikipedia articles and manually edited afterwards, so TSV (tab-separated values) is a natural format for the raw data.

To create JSON from the raw data, the conversion script `convert.js` was used.


## License

The data is copied over from Wikipedia and as such is licensed under the following license:
https://creativecommons.org/licenses/by-sa/3.0/legalcode
