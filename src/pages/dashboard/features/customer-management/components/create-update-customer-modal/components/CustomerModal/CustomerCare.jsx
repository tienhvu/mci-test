import React from 'react'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import CustomerFollowUpList from '../CustomerFollowList'

const CustomerCareSection = () => (
  <Grid size={{ xs: 12 }}>
    <Typography sx={{ fontSize: '16px', fontWeight: 400, color: '#000000', pb: '17px' }}>
      Thông tin chăm sóc khách hàng
    </Typography>
    <CustomerFollowUpList />
  </Grid>
)

export default CustomerCareSection