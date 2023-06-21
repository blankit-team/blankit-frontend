export type EnvironmentTypes = 'development' | 'production' | 'test'

export type ApiAddressTypes = {
  [key in EnvironmentTypes]: string | undefined
}
