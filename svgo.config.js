module.exports = {
  plugins: [
    {
      name: 'inlineStyles',
      params: {
        onlyMatchedOnce: false
      }
    },
    'removeComments',
    'cleanupIDs'
  ]
}