import createClient from '@sanity/client'
import { projectId, dataset, apiVersion } from '../env'
import { SANITY_API_TOKEN } from "../env"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // CDN on for client-side
  token: SANITY_API_TOKEN,
})
