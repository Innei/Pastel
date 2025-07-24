import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { codeInspectorPlugin } from 'code-inspector-plugin'
import { defineConfig } from 'vite'

const ReactCompilerConfig = {}

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]],
      },
    }),
    tailwindcss(),
    codeInspectorPlugin({
      bundler: 'vite',
      editor: 'cursor',
      hotKeys: ['altKey'],
    }),
  ],
})
