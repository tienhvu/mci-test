import React from 'react'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { CustomInput } from '../../../../../../components/CustomInput'
import { CustomSelect } from '../../../../../../components/CustomSelect'
import socialApi from '../../../../../../../../apis/socialApi'
import { useState } from 'react'

const ContactInfoSection = ({
  formData,
  errors,
  onChangeField,
  onSelectChange,
  onDateChange
}) => {
  const [social_media, setSocialMedia] = useState([])
  const [loading, setLoading] = useState(true)
  const handleAddNewSocial = async (newTitle) => {
    try {
      const response = await socialApi.addOption(newTitle)
      const newSocial = {
        value: response.id,
        label: response.title
      }
      setSocialMedia(prevSocial => [...prevSocial, newSocial])
      onSelectChange('social_media')(newSocial.value)
      return newSocial
    } catch (error) {
      console.error('Error adding new social media:', error)
      throw error
    }
  }
  return (
    <>
      <Grid container spacing={2}>
        <Typography sx={{ fontSize: '16px', fontWeight: 400, color: '#000000', textAlign:'left' }}>
      Thông tin liên hệ
        </Typography>
        <Grid container spacing={{ xs: 2, lg: 12 }} size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Grid size={{ xs: 12, md: 5, lg: 4 }}>
            <CustomInput
              label="Số điện thoại"
              type="number"
              required
              value={formData.phone_number}
              onChange={onChangeField('phone_number')}
              placeholder="Nhập số điện thoại"
              error={!!errors.phone_number}
              helperText={errors.phone_number}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 5, lg: 4 }}>
            <CustomInput
              label="Email"
              value={formData.email}
              onChange={onChangeField('email')}
              placeholder="Nhập email"
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>

          <Grid container size={{ xs: 12, md: 5, lg: 4 }} spacing={2}
            sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between' }}
          >
            <Grid size={{ xs: 12, sm: 5 }}>
              <CustomSelect
                label="Mạng xã hội"
                required
                value={formData.social_media}
                onChange={onSelectChange('social_media')}
                options={social_media}
                onAddNewOption={handleAddNewSocial}
                disable={loading}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 7 }}>
              <CustomInput
                label={'\u200B'}
                value={formData.detailed_info}
                onChange={onChangeField('detailed_info')}
                placeholder="Nhập link mạng xã hội"
                error={!!errors.detailed_info}
                helperText={errors.detailed_info}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default ContactInfoSection
