import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import React from 'react'
import CustomerFollowUpList from '../CustomerFollowList'

const CustomerCareSection = ({ 
  formData, 
  errors, 
  onCommentsUpdate 
}) => (
  <Grid size={{ xs: 12 }}>
    <Typography sx={{ 
      fontSize: '16px', 
      fontWeight: 400, 
      color: '#000000', 
      pb: '17px' 
    }}>
      Thông tin chăm sóc khách hàng
    </Typography>
    <CustomerFollowUpList 
      initialComments={formData.comments || []}
      onCommentsUpdate={onCommentsUpdate}
    />
  </Grid>
)

export default CustomerCareSection
