'use strict'

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'ChimeraUtils.js',
    library: 'ChimeraUtils',
    libraryTarget: 'umd'
  },
  node: {
    fs: 'empty'
  },
  target: 'web'
}
