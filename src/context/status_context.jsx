import React, { createContext, useState, useContext } from 'react'
import statusApi from '../apis/statusApi'

// Tạo context
const StatusContext = createContext()

// Provider component
export const StatusProvider = ({ children }) => {
  const [statusOptions, setStatusOptions] = useState([
    { value: 1, label: 'Đang xử lý' },
    { value: 2, label: 'Hoàn thành' },
    { value: 3, label: 'Chờ phản hồi' }
  ])

  // Hàm thêm trạng thái mới
  const addNewStatus = async (newTitle) => {
    try {
      const response = await statusApi.addOption(newTitle)
      const newStatus = {
        value: response.id,
        label: response.title
      }

      setStatusOptions(prevStatus => [...prevStatus, newStatus])

      return newStatus
    } catch (error) {
      console.error('Error adding new status:', error)
      throw error
    }
  }

  return (
    <StatusContext.Provider value={{ 
      statusOptions, 
      setStatusOptions,
      addNewStatus 
    }}>
      {children}
    </StatusContext.Provider>
  )
}

// Custom hook để sử dụng context
export const useStatusContext = () => {
  const context = useContext(StatusContext)
  if (!context) {
    throw new Error('useStatusContext must be used within a StatusProvider')
  }
  return context
}