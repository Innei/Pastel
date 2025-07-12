import { defineConfig } from 'nbump'
export default defineConfig({
  packages: ['packages/*'],
  leading: ['npm run build'],
  mode: 'monorepo',
  publish: true,
})
