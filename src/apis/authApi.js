import { API_ENDPOINTS } from './../utils/constants/apiConstants'

const authApi = {
  login: async (account) => {
    const response = await fetch(API_ENDPOINTS.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(account)
    })

    if (!response.ok) {
      throw new Error('Login failed')
    }

    return response.json()
  },

  register: async (account) => {
    const response = await fetch(API_ENDPOINTS.REGISTER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(account)
    })

    if (!response.ok) {
      throw new Error('Registration failed')
    }

    return response.json()
  },

//   logout: async () => {
//     const response = await fetch(API_ENDPOINTS.LOGOUT, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })

//     if (!response.ok) {
//       throw new Error('Logout failed')
//     }

//     return response.json()
//   }
}

export default authApi
