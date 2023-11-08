import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "./sanity/schemas"

const config = defineConfig({
  projectId: "5ursg66t",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2022-03-07",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config