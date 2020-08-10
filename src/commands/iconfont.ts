#!/usr/bin/env node
import path from 'path'
import fs from 'fs'
import colors from 'colors'
import { getConfig } from '../libs/getConfig'
import { fetchXml } from 'iconfont-parser'
import { generateComponent } from '../libs/generateComponent'
import parseLocalSvg from '../libs/parseLocalSvg'
import commander from 'commander'


const program = new commander.Command()

program
  .command('init')
  .action(() => {
    const targetFile = path.resolve('iconfont.json')

    if (fs.existsSync(targetFile)) {
      console.error(colors.red('File "iconfont.json" was created before.'))
    } else {
      fs.copyFileSync(path.join(__dirname, '../libs/iconfont.json'), targetFile)
      console.log(colors.green('File "iconfont.json" is created now. We recommend you add it to version control.'))
    }
  })

program
  .command('rn')
  .action(() => {
    const config = getConfig()

    const localSvg = parseLocalSvg(config)

    fetchXml(config.symbol_url).then((result) => {
      generateComponent(result, localSvg, config)
    }).catch((e) => {
      console.error(colors.red(e.message || 'Unknown Error'))
      process.exit(1)
    })

  })

program.on('--help', () => {
  console.log([
    '',
    'Usage:',
    '',
    '    ' + colors.yellow('iconfont-init') + '       : generate config file',
    '    ' + colors.yellow('iconfont-rn') + '         : generate icon components',
    '',
  ].join('\n'))
})

program.parse(process.argv)
