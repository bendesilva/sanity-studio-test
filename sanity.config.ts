import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Schema Test Studio',

  projectId: 'cv0i58ls',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],
  
  search: {
    enableLegacySearch: false, // Enable or disable legacy search
  },

  schema: {
    types: schemaTypes,
  },
})
