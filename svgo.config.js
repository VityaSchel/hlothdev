const config = {
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
// module.exports = config

import svgo from 'svgo'
import path from 'path'
import glob from 'glob-promise'
import fs from 'fs'
// const generatePrefix = file => file
const folder = './src/assets/images/technologiesLogos/**.svg'
const svgs = await glob(folder)
for (let filePath of svgs) {
  // let filePath = path.join(folder, file)
  let prefix = path.basename(filePath)//generatePrefix(file)
  // let svgo = new SVGO({
  //   ...config,
  //   plugins: [...config.plugins, {
  //     cleanupIDs: {
  //       prefix: prefix
  //     }
  //   }]
  // })

  const { data } = svgo.optimize(
    fs.readFileSync(filePath, 'utf8'), 
    // svg => {
    //   result = svg.data
    // },
    {
      ...config,
      plugins: [
        ...config.plugins, 
        {
          name: 'cleanupIDs',
          params: {
            prefix: {
              toString() {
                return `id-${prefix.replaceAll(/[^a-zA-Z]/g, '')}`
              } 
            }
          }
        }
      ]
    }
  )
  fs.writeFileSync(filePath, data)
}