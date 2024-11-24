import { Box, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import avt from './../../../../../assets/avt.png'
export default function Profile() {
  return (
    <Box sx={{ display:'flex', gap: '12px', alignItems:'center', justifyContent: 'flex-end' }}>
      <Box sx={{ textAlign: 'right' }}>
        <Typography variant='body1'>Mrs Conan</Typography>
        <Typography>Nhân viên kinh doanh</Typography>
      </Box>
      <Avatar alt="Profile" src={avt} sx={{ height:'48px', borderRadius:'20px' }}/>
    </Box>
  )
}