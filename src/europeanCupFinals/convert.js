const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')
const readline = require('readline')
const globby = require('globby')

/**
 * Convert a TSV file into JSON.
 *
 * @param {String} file File to convert from TSV to JSON
 */
async function convertFile (file) {
  // Open read stream for file.
  const input = fs.createReadStream(file)

  // Create line reader.
  const rl = readline.createInterface({
    input,
    crlfDelay: Infinity
  })

  // Walk over lines and collect objects for finals.
  const finals = []
  for await (const line of rl) {
    // Split lines by tab.
    const columns = line.split(/\t/)

    // Split things up for two-legged finals.
    let legs = {
      first: {
        result: columns[4],
        city: columns[1],
        stadium: columns[2]
      },
      second: null
    }
    if (columns[1].indexOf('/') !== -1) {
      legs = {
        first: {
          result: columns[4].split(/\//)[0].trim(),
          city: columns[1].split(/\//)[0].trim(),
          stadium: columns[2].split(/\//)[0].trim()
        },
        second: {
          result: columns[4].split(/\//)[1].trim(),
          city: columns[1].split(/\//)[1].trim(),
          stadium: columns[2].split(/\//)[1].trim()
        }
      }
    }

    // Push object to final array.
    finals.push({
      season: columns[0],
      winner: splitTeam(columns[3]),
      runnerUp: splitTeam(columns[5]),
      result: columns[4],
      city: columns[1],
      stadium: columns[2],
      legs
    })
  }

  // Create the JSON file.
  const outputFile = path.resolve(path.join(__dirname.replace('/src/', '/data/'), file.replace(/\.tsv$/, '.js')))
  const outputData = 'module.exports = ' + JSON.stringify(finals, null, 2) + ';'
  await fsPromises.mkdir(path.dirname(outputFile), { recursive: true })
  await fsPromises.writeFile(outputFile, outputData)
}

function splitTeam (team) {
  const parts = team.split(' ')

  return {
    country: parts.shift(),
    team: parts.join(' ')
  }
}

// Main function.
(async () => {
  const paths = await globby('**/*.tsv')

  paths.forEach(convertFile)
})()
