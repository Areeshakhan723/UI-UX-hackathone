import createClient from '@sanity/client'
import {projectId, dataset,  token} from "../env";

export const client = createClient({
  projectId, 
  dataset ,
  apiVersion : "2024-05-08",
  token,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
