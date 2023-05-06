// import {defineConfig} from 'sanity'
import {defineConfig} from 'sanity/lib/exports'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  // name: 'default',
  // title: 'paajeportfolio',

  // projectId: 'kwic0gw8',
  // dataset: 'production',
   name: 'default',
  title: 'portfoliobackend',

  projectId: 'zr0owxdx',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
