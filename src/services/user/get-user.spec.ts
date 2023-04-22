import { describe, expect, it } from 'vitest'
import getUser from './get-user'

describe('getUser', async () => {
  it('should return user', async () => {
    const user = await getUser('1')
    expect(user).toEqual({ id: '1' })
  })
})
