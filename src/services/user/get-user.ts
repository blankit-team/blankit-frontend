interface User {
  id: string
}
const getUser = (id: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id })
    }, 500)
  })
}

export default getUser
