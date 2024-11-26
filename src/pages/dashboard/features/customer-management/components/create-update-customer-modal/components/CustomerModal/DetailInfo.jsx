import React from 'react'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { CustomInput } from '../../../../../../components/CustomInput'
import { CustomSelect } from '../../../../../../components/CustomSelect'
import { useState, useEffect } from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import serviceApi from '../../../../../../../../apis/serviceApi'
import {
  cityOptions,
  timeSlotOptions,
  getDistrictsByCity,
  getWardsByDistrict
} from '../../../../../../../../utils/constants/mockData'

const DetailedInfoSection = ({
  formData,
  errors,
  onChangeField,
  onSelectChange,
  onDateChange
}) => {
  const [service, setService] = useState([])
  const [loading, setLoading] = useState(true)
  const [districtOptions, setDistrictOptions] = useState([])
  const [wardOptions, setWardOptions] = useState([])

  useEffect(() => {
    if (formData.city) {
      setDistrictOptions(getDistrictsByCity(formData.city))
      onChangeField('district')({ target: { value: '' } })
      onChangeField('ward')({ target: { value: '' } })
    }
  }, [formData.city])


  useEffect(() => {
    if (formData.district) {
      setWardOptions(getWardsByDistrict(formData.district))
      onChangeField('ward')({ target: { value: '' } })
    }
  }, [formData.district])

  const handleAddNewService = async (newTitle) => {
    try {
      const response = await serviceApi.addOption(newTitle)
      const newService = {
        value: response.id,
        label: response.title
      }
      setService(prevService => [...prevService, newService])

      const currentServices = formData.service || [];
      onSelectChange('service')([...currentServices, newService.value]);
      return newService
    } catch (error) {
      console.error('Error adding new service:', error)
      throw error
    }
  }

  return (
    <>
      <Grid container>
        <Grid container spacing={{ xs: 2, lg: 12 }} size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Grid size={{ xs: 12, md: 5, lg: 4 }} sx={{ display: 'flex', flexDirection: 'column', gap:'16px' }}>
            <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#000000', textAlign:'left' }}>
          Thông tin chi tiết
            </Typography>
            <CustomSelect
              label="Sản phẩm quan tâm"
              required
              // multiple={true}
              value={formData.service}
              onChange={onSelectChange('service')}
              options={service}
              multiple={true}
              onAddNewOption={handleAddNewService}
            />

            <CustomInput
              label="Ghi chú"
              value={formData.note}
              onChange={onChangeField('note')}
              placeholder=""
              sx={{ height: '47px' }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 5, lg: 4 }}>
            <CustomSelect
              label="Địa chỉ liên hệ"
              value={formData.city}
              onChange={(value) => onChangeField('city')({ target: { value } })}
              options={cityOptions}
            />
            <CustomSelect
              label={'\u200B'}
              value={formData.district}
              onChange={(value) => onChangeField('district')({ target: { value } })}
              options={districtOptions}
              disabled={!formData.city}
            />
            <CustomSelect
              label={'\u200B'}
              value={formData.ward}
              onChange={(value) => onChangeField('ward')({ target: { value } })}
              options={wardOptions}
              disabled={!formData.district}
            />
            <CustomInput
              label={'\u200B'}
              value={formData.address}
              onChange={onChangeField('address')}
              placeholder="Nhập địa chỉ chi tiết"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 5, lg: 4 }}>
            <CustomSelect
              label="Chọn khung giờ"
              required
              value={formData.timeSlot}
              onChange={(value) => onChangeField('timeSlot')({ target: { value } })}
              options={timeSlotOptions}
              icon={CalendarTodayIcon}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}


export default DetailedInfoSection
