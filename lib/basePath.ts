// Helper to get correct asset paths for both local dev and production
export const getAssetPath = (path: string): string => {
  const basePath = process.env.NODE_ENV === 'production' ? '/prince' : ''
  return `${basePath}${path}`
}

export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/prince' : ''
