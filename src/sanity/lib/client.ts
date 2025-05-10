import createClient from '@sanity/client'
import {projectId, dataset} from "../env";

export const client = createClient({
  projectId, 
  dataset ,
  apiVersion : "2024-05-08",
  token:  process.env.SANITY_API_TOKEN,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
