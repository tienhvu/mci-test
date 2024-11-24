import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import Grid from '@mui/material/Grid2'; // Giữ nguyên Grid2 như trong mã của bạn
import React, { useState } from 'react'
import sourceApi from '../../../../../../../../apis/sourcesApi'
import statusApi from '../../../../../../../../apis/statusApi'
import { CustomInput } from '../../../../../../components/CustomInput'
import { CustomSelect } from '../../../../../../components/CustomSelect'
import GenderRadioGroup from '../GenderRadioGroup'
const BasicInfoSection = ({
  formData,
  errors,
  onChangeField,
  onSelectChange,
  onDateChange
}) => {
  const [sources, setSources] = useState([])
  const [status, setStatus] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const handleAddNewSource = async (newTitle) => {
    try {
      const response = await sourceApi.addOption(newTitle)
      const newSource = {
        value: response.id,
        label: response.title
      }
      setSources(prevSources => [...prevSources, newSource])
      onSelectChange('source')(newSource.value)
      return newSource
    } catch (error) {
      console.error('Error adding new source:', error)
      throw error
    }
  }

  const handleAddNewStatus = async (newTitle) => {
    try {
      const response = await statusApi.addOption(newTitle)
      const newStatus = {
        value: response.id,
        label: response.title
      }
      setStatus(prevStatus => [...prevStatus, newStatus])
      onSelectChange('status')(newStatus.value)
      return newStatus
    } catch (error) {
      console.error('Error adding new status:', error)
      throw error
    }
  }

  return (
    <>
      <Grid container spacing={3} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', pt: '20px' }}>
        <Grid size={{ xs: 12, md: 5, lg: 4 }}>
          <CustomInput
            label="Họ tên khách hàng"
            required
            value={formData.full_name}
            onChange={onChangeField('full_name')}
            placeholder="Nhập họ tên khách hàng"
            error={!!errors.fullName}
            helperText={errors.fullName}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 5, lg: 4 }}>
          <GenderRadioGroup
            value={formData.gender}
            onChange={onChangeField('gender')}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 5, lg: 4 }}>
          <CustomInput
            label="Ngày sinh"
            type="date"
            value={formData.date_of_birth || ''}
            onChange={onDateChange('date_of_birth')}
            error={!!errors.birthDate}
            helperText={errors.birthDate}
            icon={<CalendarTodayIcon sx={{ fontSize: '14px', color: 'rgba(0,0,0,0.56)' }} />}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Grid size={{ xs: 12, md: 5, lg: 4 }} sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 3, md: 0 } }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomSelect
              label="Nguồn khách hàng"
              required
              value={formData.source}
              onChange={onSelectChange('source')}
              options={sources}
              onAddNewOption={handleAddNewSource}
              disabled={loading}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomSelect
              label="Trạng thái"
              required
              value={formData.status}
              onChange={onSelectChange('status')}
              options={status}
              onAddNewOption={handleAddNewStatus}
              disabled={loading}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default BasicInfoSection
