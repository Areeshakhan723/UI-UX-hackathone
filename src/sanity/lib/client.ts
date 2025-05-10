import createClient from '@sanity/client'

export const client = createClient({
  projectId:"s3099j9r",
  dataset: "production",
  apiVersion: "2024-05-08",
  token:  process.env.SANITY_API_TOKEN,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
