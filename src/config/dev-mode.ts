type EnvironmentTypes = 'dev' | 'prod'
type ApiAddressTypes = {
  [key in EnvironmentTypes]: string | undefined
}

export const env: EnvironmentTypes =
  process.env.NODE_ENV === 'development' ? 'dev' : 'prod'

export const apiAddress: ApiAddressTypes = {
  dev: 'http://localhost:3000',
  prod: process.env.NEXT_PUBLIC_API_ADDRESS,
}
