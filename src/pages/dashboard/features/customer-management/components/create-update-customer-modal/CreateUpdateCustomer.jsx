import CloseIcon from '@mui/icons-material/Close'
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography
} from '@mui/material'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid2'
import React, { useCallback, useEffect, useState } from 'react'
import * as yup from 'yup'
import { customerSchema } from '../../../../components/ValidationSchema'
import CustomAlertDialog from './components/AlertDialog'
import BasicInfoSection from './components/CustomerModal/BasicInfo'
import ContactInfoSection from './components/CustomerModal/ContactInfo'
import CustomerCareSection from './components/CustomerModal/CustomerCare'
import DetailedInfoSection from './components/CustomerModal/DetailInfo'
import customerApi from '../../../../../../apis/customerApi'


export default function CustomerModal({ open, onClose, handleSubmitData }) {
  const initialFormState = {
    full_name: '',
    gender: '',
    date_of_birth: null,
    phone_number: '',
    email: '',
    source: '',
    status: '',
    social_media: '',
    service:'',
    detailed_info: '',
    notes:'',
    city: '',
    district: '',
    ward: '',
    address: '',
    follow_up_date: null,
    follow_down_date: null,
    follow_up_entries: [],
    comment : {
      title: '',
      time: null,
      status_id: ''
    }
  }

  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [isDirty, setIsDirty] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    if (open) {
      setFormData(initialFormState)
      setErrors({})
      setIsDirty(false)
    }
  }, [open])

  const validateField = useCallback(async (name, value) => {
    try {
      const fieldSchema = yup.reach(customerSchema, name)
      await fieldSchema.validate(value)
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
      return true
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        [name]: error.message
      }))
      return false
    }
  }, [])

  const onChangeField = useCallback((fieldName) => async (event) => {
    const value = event.target.value
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }))
    setIsDirty(true)
    await validateField(fieldName, value)
  }, [validateField])


  const handleSelectChange = useCallback((fieldName) => async (value) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }))
    setIsDirty(true)
    await validateField(fieldName, value)
  }, [validateField])

  const handleDateChange = useCallback((fieldName) => async (value) => {
    const formattedDate = value instanceof Date ?
      value.toISOString().split('T')[0] : value

    setFormData(prev => ({
      ...prev,
      [fieldName]: formattedDate
    }))
    setIsDirty(true)
    await validateField(fieldName, formattedDate)
  }, [validateField])


  const handleSubmit = async () => {
    try {
      await customerSchema.validate(formData, { abortEarly: false })

      const transformedData = {
        ...formData,
        follow_ups: formData.follow_up_entries.map(entry => ({
          date: entry.date,
          result: entry.result,
          status: entry.status
        }))
      }


      await customerApi.addCustomer(transformedData)

      setFormData(initialFormState)
      setErrors({})
      setIsDirty(false)
      onClose()
    } catch (error) {
      const newErrors = {}
      error.inner.forEach(err => {
        newErrors[err.path] = err.message
      })
      setErrors(newErrors)
    }
  }

  const handleFollowUpUpdate = (entries) => {
    setFormData(prev => ({
      ...prev,
      follow_up_entries: entries
    }))
    setIsDirty(true)
  }

  const handleClose = () => {
    if (isDirty) {
      setShowAlert(true)
    } else {
      onClose()
    }
  }

  const handleConfirmClose = () => {
    setFormData(initialFormState)
    setErrors({})
    setIsDirty(false)
    setShowAlert(false)
    onClose()
  }


  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '4px',
            height: '90vh'
          }
        }}
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <DialogTitle
          sx={{
            backgroundColor: '#c48f1f',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '56px',
            paddingX: '20px'
          }}
        >
          <Typography variant="body1">Tạo khách hàng</Typography>
          <IconButton onClick={handleClose} size="small" sx={{ color: '#ffffff' }}>
            <CloseIcon fontSize="small" sx={{ border: '2px solid #fff', width: '28px', height: '30px', borderRadius: '8px' }}/>
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{
          p: 3,
          '&::-webkit-scrollbar': {
            width: '6px',
            height: '6px'
          },
          '&::-webkit-scrollbar-track': {
            background: '#f5f5f5',
            borderRadius: '5px'
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#bdbdbd',
            borderRadius: '3px',
            '&:hover': {
              background: '#999'
            }
          },
          scrollbarWidth: 'thin',
          scrollbarColor: '#bdbdbd #f5f5f5'
        }}>
          <Grid sx={{ display: 'flex', flexDirection:'column', gap: '20px' }}>
            <BasicInfoSection
              formData={formData}
              errors={errors}
              onChangeField={onChangeField}
              onSelectChange={handleSelectChange}
              onDateChange={handleDateChange}
            />

            <Divider />
            <ContactInfoSection
              formData={formData}
              errors={errors}
              onChangeField={onChangeField}
              onSelectChange={handleSelectChange}
              onDateChange={handleDateChange}/>
            <DetailedInfoSection
              formData={formData}
              errors={errors}
              onChangeField={onChangeField}
              onSelectChange={handleSelectChange}
              onDateChange={handleDateChange}/>
            <Divider />
            <CustomerCareSection
              formData={formData}
              errors={errors}
              onFollowUpUpdate={handleFollowUpUpdate}
            />
          </Grid>
        </DialogContent>

        {/* Button */}

        <Container
          maxWidth="false"
          sx={{
            width: '100%',
            backgroundColor: '#fafafa',
            borderRadius: '4px',
            border: '1px solid #DBDBDB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '60px',
            mb: '92px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: 2,
              width: '100%',
              maxWidth: 'lg',
              padding: '12px 24px'
            }}
          >
            <Button
              variant="text"
              onClick={handleClose}
              sx={{
                color: '#BD8306',
                fontSize: '14px',
                fontWeight: 600,
                padding: '8px 20px',
                maxHeight: '36px',
                textTransform: 'none',
                '&:hover': {
                  transition: 'all 0.5s ease',
                  border: '1px solid #dba718',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(99, 115, 129, 0.08)'
                }
              }}
            >
              Hủy
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                bgcolor: '#BD8306',
                borderRadius: '6px',
                padding: '8px 20px',
                maxHeight: '36px',
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: 600,
                width: '142px',
                '&:hover': {
                  bgcolor: '#dba718',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              Xác nhận
            </Button>
          </Box>
        </Container>
      </Dialog>
      <CustomAlertDialog
        open={showAlert}
        onClose={() => setShowAlert(false)}
        onConfirm={handleConfirmClose}
        title="Xác nhận thoát"
        content="Bạn có chắc chắn muốn thoát? Các thay đổi sẽ không được lưu lại."
      />
    </>
  )
}
