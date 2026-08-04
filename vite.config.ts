import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

/** Lightning CSS drops unprefixed backdrop-filter when -webkit- is present in source. */
function fixBackdropFilterInBuild(): Plugin {
  return {
    name: 'fix-backdrop-filter-in-build',
    apply: 'build',
    generateBundle(_, bundle) {
      for (const asset of Object.values(bundle)) {
        if (asset.type !== 'asset' || !asset.fileName.endsWith('.css')) continue
        const source = asset.source.toString()
        asset.source = source.replace(
          /-webkit-backdrop-filter:([^;{}]+);/g,
          'backdrop-filter:$1;-webkit-backdrop-filter:$1;',
        )
      }
    },
  }
}

// GitHub Pages: https://marianehds.github.io/marianehds/
export default defineConfig(({ mode }) => ({
  base: mode === 'pages' ? '/marianehds/' : '/',
  plugins: [react(), fixBackdropFilterInBuild()],
}))
