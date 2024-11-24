import { API_ENDPOINTS } from '../utils/constants/apiConstants'

const customerApi = {
  addCustomer: async (customerData) => {
    const accessToken = localStorage.getItem('access_token')
    if (!accessToken) {
      throw new Error('No access token found')
    }

    try {
      const response = await fetch(API_ENDPOINTS.CUSTOMERS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(customerData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to add customer')
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error adding customer:', error)
      throw error
    }
  },
}
export default customerApi