export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-05-08'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "sksM7K82fOBUD9qBKo8IRKLGUSp1e2zeg8vHv4pT8QIP0nEQDhAd31DAHYGhy0AKXSQrPz5oeMYzsnDf0PZdkoHAlwPQQNewSB60S4FH60EEsQnrZCN0mKL19otped0q3YqRchMmx3WDFbe0PEy42unLEbSMkKiDPnpruuVmRaop0ysCkWVn",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
