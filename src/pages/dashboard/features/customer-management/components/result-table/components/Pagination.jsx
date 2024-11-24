import { Box } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import React, { useState } from 'react'

export default function CustomPagination() {
  const [page, setPage] = useState(1)
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (event, value) => {
    setPage(value)
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent:'flex-end' }}>
      <FormControl sx={{ minWidth: 120 }}>
        <Select
          value={page}
          onChange={handleChange}
          displayEmpty
          IconComponent={isOpen ? KeyboardArrowUpIcon : KeyboardArrowDownIcon}
          sx={{
            height: 36,
            '& .MuiOutlinedInput-notchedOutline': {
              borderRadius: '39px'
            },
            '& fieldset': {
              borderRadius: '39px'
            },
            '& .MuiSelect-icon': {
              fontSize: '16px',
              color: '#818181'
            }
          }}
        >
          <MenuItem value={1}>Ten</MenuItem>
          <MenuItem value={2}>Twenty</MenuItem>
          <MenuItem value={3}>Thirty Four</MenuItem>
        </Select>
      </FormControl>

      <Pagination
        count={20}
        page={page}
        variant="outlined"
        onChange={handleChange}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            slots={{ previous: ArrowLeftIcon, next: ArrowRightIcon }}
            sx={{
              '& .MuiPaginationItem-root': {
                fontSize: '14px',
                color: '#BD8306',
                '&:hover': {
                  backgroundColor: '#f5f5f5'
                }
              },
              '& .MuiSvgIcon-root': {
                fontSize: '24px',
                color: '#828282'
              },
              '&.MuiPaginationItem-previousNext': {
                minWidth: '36px',
                height: '36px',
                borderRadius: '39px',
                padding: 0
              },
              '&.MuiPaginationItem-page': {
                minWidth: '39px',
                height: '36px',
                borderRadius:'39px',
                margin: '5px',
                padding: 0
              },
              '&.Mui-selected': {
                backgroundColor: '#F07525',
                color: '#ffffff',
                '&:hover': {
                  backgroundColor: '#F07525'
                }
              }
            }}
          />
        )}
      />
    </Box>

  )
}
