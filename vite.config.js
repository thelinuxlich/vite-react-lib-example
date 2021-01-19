const path = require('path')

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/Main.jsx'),
      name: 'react-test'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          'react': 'React'
        }
      }
    }
  },
  optimizeDeps: {
    include: ['valtio/utils']
  }
}
