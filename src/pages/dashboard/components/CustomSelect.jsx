import { useEffect } from 'react'
import React, { useState, useRef } from 'react'
import {
  TextField,
  FormControl,
  Typography,
  ClickAwayListener
} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import CustomDropdown from './../../dashboard/features/customer-management/components/create-update-customer-modal/components/DropDown'

export const CustomSelect = ({
  label,
  required = false,
  value,
  onChange,
  options = [],
  onAddNewOption,
  icon: Icon = ArrowDropDownIcon,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const anchorRef = useRef(null)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  const handleSelect = (selectedValue) => {
    onChange(selectedValue)
    handleClose()
  }

  const handleAddNew = async (newValue) => {
    if (onAddNewOption) {
      try {
        const newOption = await onAddNewOption(newValue)
        return newOption
      } catch (error) {
        console.error('Error:', error)
        throw error
      }
    }
  }

  const selectedOption = options.find(opt => opt.value === value)

  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <FormControl fullWidth >
        <Typography
          sx={{
            mb: '4px',
            fontWeight: 400,
            fontSize: '12px'
          }}
        >
          {label}
          {required && <span style={{ color: '#db5454', marginLeft: '4px' }}>*</span>}
        </Typography>
        <TextField
          ref={anchorRef}
          value={selectedOption?.label || ''}
          onClick={handleOpen}
          sx={{
            '& .MuiInputBase-root': {
              fontSize: '14px',
              height: '36px',
              color: '#181B22',
              padding: 0,
              cursor: 'pointer'
            },
            '& .MuiOutlinedInput-root': {
              height: '36px',
              padding: '0px !important'
            },
            '& .MuiInputBase-input': {
              padding: '0 14px',
              cursor: 'pointer'
            },
            '& .MuiFormHelperText-root': {
              marginLeft: 0,
              fontSize: '12px'
            }
          }}
          slotProps={{
            input : {
              readOnly: true,
              endAdornment: (
                <Icon
                  sx={{
                    marginRight: '8px',
                    fontSize: '14px',
                    color: 'rgba(0,0,0,0.56)',
                    transform: isOpen ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s'
                  }}
                />
              )
            }
          }}

          {...props}
        />

        <CustomDropdown
          open={isOpen}
          anchorEl={anchorRef.current}
          options={options}
          selectedValue={value}
          onSelect={handleSelect}
          onAddNew={onAddNewOption ? handleAddNew : undefined}
          onClose={handleClose}
        />
      </FormControl>
    </ClickAwayListener>
  )
}