import { Box, TextField } from '@mui/material'
import filterIcon from './../../../../../assets/filter.png'
export default function Filter() {
  return (
    <Box sx={{ display:'flex', gap: '31px', alignItems:'center' }}>
      <TextField
        placeholder="Tên, SDT, Email"
        variant="outlined"
        sx={{
          width: { xs: '200px', sm: '348px' },
          '& .MuiOutlinedInput-root': {
            height: '40px'
          }
        }}
      />
      <Box
        component="img"
        sx={{
          height: 'auto',
          width: 36,
          cursor: 'pointer'
        }}
        alt="customer-logo"
        src={filterIcon}
      />
    </Box>
  )
}
