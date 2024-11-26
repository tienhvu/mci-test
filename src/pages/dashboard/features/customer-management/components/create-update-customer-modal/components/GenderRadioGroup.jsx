import React from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'

const GenderRadioGroup = ({ value, onChange }) => {
  const formControlLabelStyle = {
    fontSize: '14px',
    fontWeight: 400,
    color:'#181B22'
  }
  const radioStyle = {
    '& .MuiSvgIcon-root': {
      fontSize: { xs: '16px', sm: '20px', lg: '16px' }
    },
    '&.Mui-checked': {
      '& .MuiSvgIcon-root': {
        color: '#2769B1'
      }
    }
  }
  const formLabelStyle = {
    fontSize: '12px',
    fontWeight: 400,
    color: '#8f8f8f',
    pr: '24px',
    '&.Mui-focused': {
      color: '#8f8f8f'
    }
  }

  return (
    <FormControl sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent:{ md:'center' } }}>
      <FormLabel
        id="gender-label"
        sx={formLabelStyle}
      >
        Giới tính
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="gender-label"
        name="gender"
        value={value || 'Nam'}
        onChange={onChange}
        sx={{ gap: '8px' }}
      >
        <FormControlLabel
          value="Nam"
          control={<Radio sx={radioStyle} />}
          label="Nam"
          sx={formControlLabelStyle}
        />
        <FormControlLabel
          value="Nữ"
          control={<Radio sx={radioStyle} />}
          label="Nữ"
          sx={formControlLabelStyle}
        />
        <FormControlLabel
          value="Khác"
          control={<Radio sx={radioStyle} />}
          label="Khác"
          sx={formControlLabelStyle}
        />
      </RadioGroup>
    </FormControl>
  )
}

export default GenderRadioGroup
