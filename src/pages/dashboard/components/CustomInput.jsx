import React, { useState, useRef } from 'react'
import { TextField, FormControl, Typography, InputAdornment } from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'

export const CustomInput = ({
  label,
  required = false,
  value,
  onChange,
  size = 'medium',
  fullWidth = true,
  error,
  helperText,
  type = 'text',
  icon,
  ...props
}) => {
  const [isBlurred, setIsBlurred] = useState(false)
  const inputRef = useRef(null)

  const handleBlur = () => {
    setIsBlurred(true)
  }

  const handleShowDatePicker = () => {
    if (inputRef.current) {
      inputRef.current.showPicker()
    }
  }

  const renderIcon = () => {
    if (typeof icon === 'string') {
      return <img src={icon} alt="icon" style={{ width: '14px', height: '14px' }} />
    }
    return icon
  }

  return (
    <FormControl fullWidth={fullWidth} error={!!error}>
      <Typography sx={{ mb: '4px', fontWeight: 400, fontSize: '12px', color: error ? '#db5454' : '#8f8f8f' }}>
        {label}
        {required && <span style={{ color: '#db5454', marginLeft: '4px' }}>*</span>}
      </Typography>
      <TextField
        inputRef={inputRef}
        type={type}
        value={value}
        onChange={onChange}
        size={size}
        fullWidth={fullWidth}
        onBlur={handleBlur}
        InputProps={{
          disableUnderline: true, 
        }}
        error={!!error}
        helperText={helperText}
        onClick={type === 'date' ? handleShowDatePicker : undefined}
        sx={{
          '& .MuiInputBase-root': {
            fontSize: '14px',
            height: '36px',
            color: '#181B22',
            backgroundColor: isBlurred && value && !error ? '#EDF9F6' : 'transparent',
            padding: 0,
            cursor: type === 'date' ? 'pointer' : 'text',
            '& input[type="date"]::-webkit-calendar-picker-indicator': {
              display: 'none'
            },
            '& input[type="date"]': {
              cursor: 'pointer'
            }
          },
          '& .MuiOutlinedInput-root': {
            height: '36px',
            padding: '0px !important'
          },
          '& .MuiInputBase-input': {
            padding: '0 14px'
          },
          '& .MuiFormHelperText-root': {
            marginLeft: 0,
            fontSize: '12px'
          },
          '& .MuiInputBase-input::placeholder': {
            fontSize: '12px',
            color: '#8f8f8f'
          }
        }}
        slotProps={{
          input: {
            onClick: type === 'date' ? handleShowDatePicker : undefined,
            endAdornment: type === 'date' && (
              <InputAdornment
                position="end"
                sx={{
                  borderLeft: '1px solid #dbdbdb',
                  paddingX: '12px',
                  height: '40px',
                  '& .MuiSvgIcon-root': {
                    cursor: 'pointer'
                  }
                }}
                onClick={handleShowDatePicker}
              >
                {renderIcon()}
              </InputAdornment>
            )
          }
        }}
        {...props}
      />
    </FormControl>
  )
}