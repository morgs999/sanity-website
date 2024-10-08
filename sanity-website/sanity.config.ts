import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'sanity-website',

  projectId: 'iqewa31y',
  dataset: 'production',
  useCdn: false,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
