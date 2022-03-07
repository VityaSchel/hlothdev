module.exports = {
  plugins: [
    {
      name: 'inlineStyles',
      params: {
        onlyMatchedOnce: false
      }
    },
    'removeComments',
    {
      name: 'cleanupIDs',
      params: {
        prefix: {
          toString() {
            this.counter = this.counter || 0

            return `id-${this.counter++}`
          }
        }
      }
    }
  ]
}

import SVGO from 'svgo'
import path, { generatePrefix } from 'path'
import glob from 'glob-promise'
// const generatePrefix = file => file
const folder = './src/assets/images/technologiesLogos/**.svg'
const svgs = await glob(folder)
for (let filePath of svgs) {
  // let filePath = path.join(folder, file)
  let prefix = path.basename(filePath)//generatePrefix(file)
  let svgo = new SVGO({
    plugins: [{
      cleanupIDs: {
        prefix: prefix
      }
    }]
  })

  svgo.optimize(fs.readFileSync(filePath, 'utf8'), svg => {
    result = svg.data
  })
}