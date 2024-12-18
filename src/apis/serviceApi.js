import { API_ENDPOINTS } from '../utils/constants/apiConstants'

const serviceApi = {
  addOption: async (newValue) => {
    const accessToken = localStorage.getItem('access_token')
    if (!accessToken) {
      throw new Error('No access token found')
    }
    try {
      const response = await fetch(API_ENDPOINTS.SERVICES, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          title: newValue.trim()
        })
      })

      if (!response.ok) {
        throw new Error('Failed to add new option')
      }
      const data = await response.json()
      console.log('Data service: ', data);
      
      return data
    } catch (error) {
      console.error('Error adding service:', error)
      throw error
    }
  }
}

export default serviceApi
